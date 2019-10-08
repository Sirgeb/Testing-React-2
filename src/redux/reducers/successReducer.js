import { actionTypes } from '../actions';
/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @param {boolean} - new success state.
 */

const successReducer = (state=false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}

export default successReducer;
