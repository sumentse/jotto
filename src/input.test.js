import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState = {})=>{
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
}

describe('render', () => {
  let wrapper;
  beforeEach(()=>{
    const initialState = { success: false }
    wrapper = setup(initialState);
  })
  describe('words has not been guessed', ()=>{
    it('renders component without error',()=>{
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1); 
    });

    it('renders input box', ()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    it('renders submit button',()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('words has been guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
      const initialState = {success:true}
      wrapper = setup(initialState);
    })
    it('renders component without error',()=>{
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    it('does not render input box',()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    it('does not render submit button',()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });

  
});

describe('redux props', ()=>{
  it('has a success piece of prop', ()=>{
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', ()=>{
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord action creator call', ()=>{
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(()=>{
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock
    };

    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.instance().inputBox.current = { value: guessedWord};

    const submitComponent = findByTestAttr(wrapper, 'submit-button');
    submitComponent.simulate('click', {preventDefault(){}});
  });

  test('calls `guessWord` when button is clicked', ()=>{

    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);

  });

  test('calls `guessWord` with input value as argument', ()=>{
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord)
  })

});

