import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const isOperator = (value) => {
  return !isNaN(value) || value === "AC";
};

const Button = ({ type, onButtonClick, value, className }) => {
  return (
    <button
      onClick={onButtonClick(value)}
      type={type}
      className={`button ${
        isOperator(value) ? null : "button__operator"
      } ${className}`}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(["reset", "number", "operator"])
};

export default Button;
