import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import userReducer from './user/userReducer';

const store = createStore(combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
