import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { actionTypes, correctGuess, getSecretWord } from './';

describe('correctGuess',()=>{
  test('returns an action type `correctGuess`', ()=>{
    const action = correctGuess();
    expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
  });
});

describe('getSecretWord action creator',()=>{
  beforeEach(()=>{
    moxios.install();
  });

  afterEach(()=>{
    moxios.uninstall();
  });

  test('add response word to state', ()=>{
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(()=>{
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
      
    });


    return store.dispatch(getSecretWord())
      .then(()=>{
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});