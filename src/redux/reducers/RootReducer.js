import { combineReducers } from "redux";
import GetUserReducer from "./userReducer/Index";
import GetScheduleReducer from "./scheduleReducer/Index";
import GetCategoryReducer from "./categoryReducer/Index";

const RootReducer = combineReducers({
  rGetDataUser: GetUserReducer,
  rGetDataSchedule: GetScheduleReducer,
  rGetDataCategory: GetCategoryReducer,
});

export default RootReducer;
