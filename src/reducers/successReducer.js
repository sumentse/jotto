import {actionTypes} from '../actions';
/**
 * @param {array} state - array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - a new success state
 */
export default (state = false, action) => {
  switch(action.type){
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};