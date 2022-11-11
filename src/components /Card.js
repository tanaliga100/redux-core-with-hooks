import React from "react";

const Card = (props) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        maxHeight: "100px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: ".6rem",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
