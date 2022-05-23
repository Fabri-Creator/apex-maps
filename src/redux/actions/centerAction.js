export const SET_CENTER = "SET_CENTER";

export function setCenter(markers) {
  return { type: SET_CENTER, payload: markers };
}
