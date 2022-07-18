import {createStore,compose,applyMiddleware} from 'redux';
import { messagesReducer} from './reducers/messagesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  messagesReducer,composeEnhancers(applyMiddleware())
);

