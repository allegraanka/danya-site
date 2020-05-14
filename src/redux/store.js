import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// instantiate store object, and spread in all of the values in the array into the function call as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;