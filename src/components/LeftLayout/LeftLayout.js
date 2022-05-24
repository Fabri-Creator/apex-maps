import React from "react";

import SearchBox from "../SearchBox/SearchBox";
import { leftZoom } from "../../global";

import "./styles/index.css";

const LeftLayout = () => {
  return (
    <div className="left-container">
      <SearchBox zoom={leftZoom} />
    </div>
  );
};

export default LeftLayout;
