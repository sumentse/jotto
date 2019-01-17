import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
};

const setup = (props)=>{
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps}/>);
}

test('It should not throw warning with expected props', ()=>{
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = setup({guessedWords:[]});
  })

  it('renders without error', ()=>{
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('renders instruction to guess a word', ()=>{
    const instructions = findByTestAttr(wrapper, 'component-instruction');
    expect(instructions.text().length).not.toBe(0);
  });
  
});

describe('if there are words guessed', ()=>{
  let wrapper;
  let guessedWords = [
    {guessedWord: 'train', letterMatchCount: 3},
    {guessedWord: 'agile', letterMatchCount: 1},
    {guessedWord: 'party', letterMatchCount: 5}
  ];

  beforeEach(()=>{
    wrapper = setup({guessedWords});
  });

  it('renders without error', ()=>{
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('renders "guess words" section', ()=>{
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  it('correct number of guessed words', ()=>{
    const guessWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessWordsNodes.length).toBe(guessedWords.length);
  });

});