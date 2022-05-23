import React, { useMemo } from "react";
import "./styles/index.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import "./styles/index.css";

const Map = ({ center, zoom, markers, handleReset }) => {
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

export default Map;
