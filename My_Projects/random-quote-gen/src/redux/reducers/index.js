import { combineReducers } from "redux";
import colorPickerReducer from "./colorPickerReducer.js";
import indexReducer from "./indexReducer.js";

const rootReducer=combineReducers({colpic:colorPickerReducer,ind:indexReducer})

export default rootReducer;