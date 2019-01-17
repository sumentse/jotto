import {actionTypes} from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state
 * @param {object} action
 * @returns {string} - new state of secret word
 */
export default (state=null, action)=>{
    switch(action.type){
        case 'SET_SECRET_WORD':
            return action.payload;
        default:
            return state;
    }
    return state;
}