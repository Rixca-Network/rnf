import React from "react";

function CardLayout(props) {
  return <div className="p-3 overflow-auto bg-gray-800 rounded">{props.children}</div>;
}

export default CardLayout;
