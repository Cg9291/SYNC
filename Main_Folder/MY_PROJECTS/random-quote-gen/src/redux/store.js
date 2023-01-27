import { createStore,compose,applyMiddleware } from "redux";
import rootReducer from './reducers/reducersIndex.js'

/* TODO */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,composeEnhancers(applyMiddleware()))

export default store;
