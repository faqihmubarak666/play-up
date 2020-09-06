import { combineReducers } from "redux";
import GetUserReducer from "./userReducer/Index";
import GetScheduleReducer from "./scheduleReducer/Index";
import GetCategoryReducer from "./categoryReducer/Index";
import GetFeatureReducer from "./featureReducer/Index";

const RootReducer = combineReducers({
  rGetDataUser: GetUserReducer,
  rGetDataSchedule: GetScheduleReducer,
  rGetDataCategory: GetCategoryReducer,
  rGetDataFeature: GetFeatureReducer,
});

export default RootReducer;
