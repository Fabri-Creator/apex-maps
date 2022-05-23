import { SET_CENTER } from "../actions/centerAction";

const defaulCenter = { lat: 25.7616798, lng: -80.1917902 };

function centerReducer(state = defaulCenter, action) {
  switch (action.type) {
    case SET_CENTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default centerReducer;
