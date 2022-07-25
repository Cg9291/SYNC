import { createStore,compose,applyMiddleware } from "redux";
import rootReducer from './reducers/index.js'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store=createStore(rootReducer,composeEnhancers(applyMiddleware()))

export default store;