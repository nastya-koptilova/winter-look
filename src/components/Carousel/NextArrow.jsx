import React from "react";
import "./CarouselStyles.css";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "46px",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
        width: "76px",
        height: "76px",
        top: "114px",
        zIndex: "5",
      }}
      onClick={onClick}
    />
  );
}
