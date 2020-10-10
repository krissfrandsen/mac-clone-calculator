import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Display = ({ value }) => {
  return <div className="display">{value}</div>;
};

Display.propTypes = {
  value: PropTypes.string
};
export default Display;
