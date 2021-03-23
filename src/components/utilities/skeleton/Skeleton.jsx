import React from "react";
import styles from "./Skeleton.module.css";
export const Skeleton = (props) => {
  const { width } = props;
  const { height } = props;
  const { marginL } = props;
  const { marginR } = props;
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: "8px",
    marginLeft: `${marginL}px`,
    marginRight: `${marginR}px`,
  };

  return (
    <>
      <div className={styles.skeleton} style={style}>
        </div>
    </>
  );
};

export default Skeleton;
