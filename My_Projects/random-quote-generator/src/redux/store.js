import { createStore,compose,applyMiddleware } from "redux";
import indexReducer from './reducers/indexReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store=createStore(indexReducer,composeEnhancers(applyMiddleware()))

export default store;