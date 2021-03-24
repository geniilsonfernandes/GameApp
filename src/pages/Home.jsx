import React from "react";
import CategoriesHome from "../components/Categories/CategoriesHome";
import CoverBig from "../components/cover/CoverBig";
import Coversingle from "../components/cover/coverSilgle/Coversigle";

const Home = () => {
  return (
    <>
       <CoverBig />
       <CategoriesHome />
       <Coversingle />
    </>
  );
};

export default Home;
