import { combineReducers } from "redux";
import GetUserReducer from "./userReducer/Index";

const RootReducer = combineReducers({
  rGetDataUser: GetUserReducer,
});

export default RootReducer;
