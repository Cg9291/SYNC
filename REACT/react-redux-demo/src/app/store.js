import {createStore,applyMiddleware} from 'redux';
import { messagesReducer } from '../messagesReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = createStore(
  messagesReducer,
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/* configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

