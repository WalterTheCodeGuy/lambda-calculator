import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operator-buttons">{props.operators.char}</button>
  );
};

export default OperatorButton;