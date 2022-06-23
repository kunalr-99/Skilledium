import React from "react";

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0, 0, 0, 1)",
          color: "rgba(255, 255, 255, 0.7)",
          padding: "10px",
          margin: "0 -15px",
          width: "40px",
          height: "40px",
        }}
        onClick={props.onClick}
      ></div>
    </>
  );
};

export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0, 0, 0, 1)",
          color: "rgba(255, 255, 255, 0.7)",
          padding: "10px",
          margin: "0 -15px",
          width: "40px",
          height: "40px",
        }}
        onClick={props.onClick}
      ></div>
    </>
  );
};
