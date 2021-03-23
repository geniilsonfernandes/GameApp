import React from "react";
import styles from "./CategorieBtnSmall.module.css";
import NextIcon from "../../../svg/cover/NextSvg";
import { Link } from "react-router-dom";
const CategorieBtnSmall = (props) => {
  const { categorie } = props;
  const { img } = props;
  const { id } = props;
  const { classStyles } = props;
  console.log(classStyles);
  return (
    <>
      <div key={id} className={`${styles.CategorieBtnSmall} ${styles[`${classStyles}`]}`}>
        <Link to={`categorie/${id}`}>
          {categorie}
          <NextIcon />
        </Link>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default CategorieBtnSmall;
