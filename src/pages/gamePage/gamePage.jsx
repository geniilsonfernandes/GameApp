import React, { useState, useEffect } from "react";
import styles from "./GamePage.module.css";
import global from "../../styles/global.module.css";
import rawg from "../../data/rawg";

import img1 from "../../img/foto1.png";
import BtnFavorite from "../../components/utilities/buttons/BtnFavorite";
import { useParams } from "react-router-dom";
import Skeleton from "../../components/utilities/skeleton/Skeleton";

const GamePage = () => {
  const params = useParams();

  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  //  const description = game.description.replace('<p>','').split('</p>')
  console.log(params);
  useEffect(() => {
    async function fetchData() {
      const response = await rawg.gameSigle(params.id);
      setGame(response);
      setLoading(false);
      console.log(response);
    }
    fetchData();
  }, [params]);

  const el = document.querySelector(".gameInfo");

  console.log(el);
  return (
    <>
      <header>
        <img
          className={styles.gamePhoto}
          src={loading ? "" : game.background_image}
          alt={loading ? "" : game.name}
        />
      </header>
      <div className={global.mwfix}>
        <div className={styles.headerContainer}>
          <div className={styles.leftContent}>
            <div className={styles.gameInfo}>
              <div className={styles.btnFavorite}>
                <BtnFavorite />
              </div>

              <div className={styles.gameRating}>
                {loading ? "00" : game.metacritic}
              </div>
              <h2>
                {loading ? (
                  <Skeleton width={200} mw={"px"} height={36} mh={"px"} />
                ) : (
                  game.name
                )}
              </h2>
              <div className={styles.description}>
                {loading ? (
                  <Skeleton width={500} mw={"px"} height={36} mh={"px"} />
                ) : (
                  <p>{game.description_raw.substring(0, 150)}... </p>
                )}
                <div className={styles.Read}>Read more</div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.gameContent}>
              <div className={styles.contentItem}>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.modalContent}></div>
    </>
  );
};

export default GamePage;
