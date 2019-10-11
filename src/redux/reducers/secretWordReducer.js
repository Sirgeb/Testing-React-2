import { actionTypes } from '../actions/index';

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (secret word payload from action )
 */
const secretWordReducer = (state=null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}

export default secretWordReducer;
