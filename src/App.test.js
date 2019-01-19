import React from 'react';
import {shallow} from 'enzyme';
import {storeFactory} from '../test/testUtils';

import App, {UnconnectedApp} from './App';

const setup = (initialState = {})=>{
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store}/>).dive();
  return wrapper;
}

describe('render', ()=>{
  test('it should render app', ()=>{
    const component = setup();
    expect(component.length).toBe(1);
  })
});

describe('redux property', ()=>{
  
  test('has access to the `success` state', ()=>{
    const success = false;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has access to the `secretWord` state', ()=>{
    const secretWord = 'party';
    const wrapper = setup({secretWord});
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to the `guessedWords` state', ()=>{
    const guessedWords = [{guessedWord: 'train', letterMatchCount:3}];
    const wrapper = setup({guessedWords});
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test('has access to the `getSecretWord` action creator as a function prop', ()=>{
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });

});

test('`getSecretWord` runs on App mount', ()=>{
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  //set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);

});
