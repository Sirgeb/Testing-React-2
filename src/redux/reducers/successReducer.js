/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @param {boolean} - new success state.
 */

const InitialState = ["hello world"]
const successReducer = (state = InitialState, action) => {
  return state;
}

export default successReducer;
