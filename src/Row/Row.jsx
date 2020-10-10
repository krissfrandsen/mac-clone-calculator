import React from "react";

import "./style.css";

export const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

export const RowItem = ({ children }) => {
  return <div className="row-item">{children}</div>;
};
