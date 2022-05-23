import { combineReducers } from "redux";
import markersReducer from "./reducers/markersReducer";
const rootReducer = combineReducers({
  markers: markersReducer
});
export default rootReducer;
