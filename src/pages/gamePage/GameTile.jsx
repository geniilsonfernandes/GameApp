import React from "react";
import styles from "./GameTile.module.css";
import BtnFavorite from "../../components/utilities/buttons/BtnFavorite";

const GameTile = (props) => {
   
    
  return (
    <>
      <div className={styles.gameInfo}>
        <div className={styles.btnFavorite}>
          <BtnFavorite />
        </div>
        <div className={styles.gameRating}>34</div>
        <h2>fdsf</h2>

        <p>dfsfds </p>
      </div>
    </>
  );
};

export default GameTile;
