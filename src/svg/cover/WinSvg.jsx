import React from "react";

const WinSvg = (props) => {
  const {color} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 13 13"
    >
      <g clipPath="url(#clip0)">
        <path
          fill={color}
          d="M6.388.96C8.531.626 10.704.306 12.861 0v5.78c-2.158.015-4.315.045-6.473.045a263.31 263.31 0 010-4.864zM.904 1.738c1.618-.259 3.251-.472 4.885-.686v4.789c-1.634 0-3.267.03-4.885.015V1.739zM.904 6.374c1.633 0 3.251.016 4.885.016v4.804c-1.634-.245-3.252-.458-4.885-.687V6.374zM6.373 6.436h6.488V12.2c-2.157-.335-4.315-.64-6.473-.93-.015-1.617-.015-3.218-.015-4.834z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill={color}
            d="M0 0h11.957v12.2H0z"
            transform="translate(.904)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WinSvg;
