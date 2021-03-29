import React from "react";
//css
import global from "../../styles/global.module.css";
//comps
import CategorieTittle from "./CategorieTittle/CategorieTittle";
import GridCard from "./GridCard/GridCard";

const Categorie = () => {
  return (
    <section className={global.mwfix}>
      <CategorieTittle />

      <GridCard />
    </section>
  );
};

export default Categorie;
