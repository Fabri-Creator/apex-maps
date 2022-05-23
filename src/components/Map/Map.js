import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "@reach/combobox/styles.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./styles/index.css";
import "./styles/index.css";

const Map = ({ center, zoom, markers, handleReset }) => {
  console.log("Map");
  return (
    LoadScript && (
      <GoogleMap
        mapIds={"8a0235760df4524b"}
        id={"inputReset"}
        zoom={zoom}
        center={center}
        mapContainerClassName="map-container"
        onClick={handleReset}
      >
        {markers &&
          markers.map((marker) => (
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
