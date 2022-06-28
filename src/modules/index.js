import { combineReducers } from "redux";
import userReducer from "./userReducer";
import fileUpReducer from "./fileUpReducer";
const rootReducer = combineReducers ({
  userReducer,
  fileUpReducer,
})

export default rootReducer