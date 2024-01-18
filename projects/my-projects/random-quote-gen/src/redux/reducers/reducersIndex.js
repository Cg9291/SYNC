import { combineReducers } from "redux";
import colorPickerReducer from "./colorPickerReducer.js";
import quotePickerReducer from "./quotePickerReducer.js";

const rootReducer=combineReducers({quotePickerReducer,colorPickerReducer})

export default rootReducer;
