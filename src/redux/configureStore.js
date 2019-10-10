import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

export const middlewares = [ReduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store =  createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
