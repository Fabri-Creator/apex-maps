import React from "react";
import PropTypes from "prop-types";

import "@reach/combobox/styles.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./styles/index.css";

const Map = ({ center, zoom, markers, handleReset }) => {
  return (
    LoadScript && (
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="map-container"
        onClick={handleReset}
      >
        {markers.map((marker) => (
          <Marker key={`${Math.random()} ${zoom}`} position={marker} />
        ))}
      </GoogleMap>
    )
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.array.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default Map;
