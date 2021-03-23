import React from "react";
//styles
import styles from "./CategoriesHome.module.css";
import global from "../../styles/global.module.css";
import { categoriesId } from "../../data/config.js";
//conps
import CategorieBtnSmall from "../utilities/buttons/CategorieBtnSmall";
//img
import CategorieImg from "../../img/categoriaActionsSmal.png";
import AdventureImg from "../../img/categoriaAdventureSmal.png";

const CategoriesHome = () => {

  return (
    <section className={global.mwfix}>
      <div className={styles.categories__grid}>
        <div className={styles.categories__title}>
          <h2>
            {" "}
            <span>Categories</span> we think you’ll like
          </h2>
        </div>
        <div className={styles.divisor}></div>
        <div className={styles.categories__containerGrid}>
          {categoriesId.map((item) => (
            <CategorieBtnSmall
              categorie={`${item.name}`}
              id={item.id}
              img={CategorieImg}
              classStyles={`${item.name+item.id}`}
            ></CategorieBtnSmall>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
