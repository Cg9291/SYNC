import { combineReducers } from "redux";
import colorPickerReducer from "./colorPickerReducer.js";
import quotePickerReducer from "./quotePickerReducer.js";

const rootReducer=combineReducers({colorPickerReducer,quotePickerReducer})

export default rootReducer;