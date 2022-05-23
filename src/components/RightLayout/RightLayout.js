import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import { rightZoom } from "../../global";
import "./styles/index.css";

const RightLayout = () => {
  return (
    <div className="right-container">
      <SearchBox zoom={rightZoom} />
    </div>
  );
};

export default RightLayout;
