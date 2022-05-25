import React from "react";
import PropTypes from "prop-types";

import SearchBox from "../SearchBox/SearchBox";

import "./styles/index.css";

const Layout = ({ zoom, variant }) => (
  <div className={variant}>
    {/* <h3>Type location</h3> */}
    <SearchBox zoom={zoom} />
  </div>
);

Layout.propTypes = {
  zoom: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired
};

export default Layout;
