import React, { useState } from "react";
import Map from "../Map/Map";
import { useDispatch, useSelector } from "react-redux";
import { addMarkers } from "../../redux/actions/markerAction";
import "./styles/index.css";

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

const SearchBox = ({ zoom }) => {
  const markersRedux = useSelector((state) => state.markers);
  // const [markers, setMarkers] = useState(markersRedux);
  const [center, setCenter] = useState({ lat: 40.75, lng: -74 });
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
    setCenter({ lat, lng });
    // setMarkers({ lat, lng });
    // setear el estadi de markers cn el dispatch
    dispatch(addMarkers([...markersRedux, { lat, lng }]));
  };
  const handleReset = () => {
    setValue("");
    // document.getElementById("inputReset").value = null;
  };
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
        markers={markersRedux}
        handleReset={handleReset}
      />
    </div>
  );
};

export default SearchBox;
