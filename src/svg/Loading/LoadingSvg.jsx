import React from "react";
import styles from './loading.module.css'


const LoadingSvg = () => {
  return (
    <div className={styles.loading}>
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6297 18.8211C19.0946 20.7633 16.9491 22.1309 14.5404 22.7026C12.1317 23.2744 9.60048 23.0169 7.35625 21.9717C5.11201 20.9266 3.28594 19.155 2.17338 16.9434C1.06082 14.7318 0.726817 12.2096 1.2254 9.78467C1.72398 7.35974 3.02599 5.17389 4.92085 3.58066C6.8157 1.98742 9.19261 1.07996 11.6671 1.00504C14.1417 0.930123 16.5691 1.69213 18.5569 3.16781"
          stroke="#C4C4C4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LoadingSvg;
