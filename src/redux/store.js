import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// set middlewares to empty so that logging to the console does not occur on production
const middlewares = [];

// only push logger into our middlewares array if we're in development, so logging only occurs in development
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// instantiate store object, and spread in all of the values in the array into the function call as individual arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };