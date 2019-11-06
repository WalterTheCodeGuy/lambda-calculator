import React, { useState } from "react";

const Display = (props) => {
  const [displayState] = useState(0);
  return <div className="display">{displayState}</div>;
};

export default Display;