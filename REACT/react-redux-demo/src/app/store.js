import {createStore,applyMiddleware} from 'redux';
import { messagesReducer } from '../messagesReducer';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = createStore(
  messagesReducer
);


/* configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

