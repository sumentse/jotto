import {getLetterMatchCount} from './';

describe(getLetterMatchCount, ()=>{
  const secretWord = 'hello';
  it('should display correct count when there are no matches', ()=>{
    const foundMatches = getLetterMatchCount('cat', secretWord);
    expect(foundMatches).toBe(0);
  });

  it('should display correct length of matches', ()=>{
    const foundMatches = getLetterMatchCount('helix', secretWord);
    expect(foundMatches).toBe(3);
  });
  
  it('should display correct length of matches if there are duplicate letters', ()=>{
    const foundMatches = getLetterMatchCount('lookout', secretWord);
    expect(foundMatches).toBe(2);
  });
})