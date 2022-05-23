import { combineReducers } from "redux";
import markersReducer from "./reducers/markersReducer";
import centerReducer from "./reducers/centerReducer";

const rootReducer = combineReducers({
  markers: markersReducer,
  center: centerReducer
});
export default rootReducer;
