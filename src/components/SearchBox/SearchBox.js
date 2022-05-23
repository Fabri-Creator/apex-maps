import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxPopover,
  ComboboxOption
} from "@reach/combobox";

import Map from "../Map/Map";
import { addMarkers } from "../../redux/actions/markerAction";
import { setCenter } from "../../redux/actions/centerAction";

import "./styles/index.css";

const SearchBox = ({ zoom }) => {
  let markers = useSelector((state) => state.markers);
  let center = useSelector((state) => state.center);
  // const [markers, setMarkers] = useState(markersRedux);
  // const [center, setCenter] = useState({ lat: 40.75, lng: -74 });
  const dispatch = useDispatch();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);

    dispatch(setCenter({ lat, lng }));
    dispatch(addMarkers([...markers, { lat, lng }]));
    setValue("");
  };
  const handleReset = () => {
    setValue("");
  };
  console.log("SearchBox");

  return (
    <div className="search-container">
      <Combobox onSelect={handleSelect} className="combo-box-container">
        <ComboboxInput
          disabled={!ready}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="combo-box-input"
          placeholder="Search an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Map
        center={center}
        zoom={zoom}
        markers={markers}
        handleReset={handleReset}
      />
    </div>
  );
};

SearchBox.propTypes = {
  zoom: PropTypes.number.isRequired
};

export default SearchBox;
