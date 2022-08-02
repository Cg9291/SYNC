import { createStore,compose,applyMiddleware } from "redux";
//import rootReducer from './reducers/'
import colorPickerReducer from "./reducers/reducersIndex";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store=createStore(colorPickerReducer,composeEnhancers(applyMiddleware()))

export default store;