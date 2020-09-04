import { combineReducers } from "redux";
import GetUserReducer from "./userReducer/Index";
import GetScheduleReducer from "./scheduleReducer/Index";

const RootReducer = combineReducers({
  rGetDataUser: GetUserReducer,
  rGetDataSchedule: GetScheduleReducer,
});

export default RootReducer;
