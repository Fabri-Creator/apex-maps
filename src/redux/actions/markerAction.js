export const SET_MARKERS = "SET_MARKERS";

export function addMarkers(markers) {
  return { type: SET_MARKERS, payload: markers };
}
