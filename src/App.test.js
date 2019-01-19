import React from 'react';
import {shallow} from 'enzyme';
import {storeFactory} from '../test/testUtils';

import App from './App';

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
