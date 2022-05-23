import { SET_MARKERS } from "../actions/markerAction";

const defaulMarker = [];

function markersReducer(state = defaulMarker, action) {
  switch (action.type) {
    case SET_MARKERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default markersReducer;
