import React from "react";

const Chevron = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
      width="18"
      height="12"
    >
      <path fill="none" stroke={props.fill} strokeWidth="3" d="M1 1l8 8 8-8" />
    </svg>
  );
};

export default Chevron;
