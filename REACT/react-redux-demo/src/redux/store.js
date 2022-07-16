import {createStore} from 'redux';
import { messagesReducer } from './reducers/messagesReducer';

export const store = createStore(
  messagesReducer
);

