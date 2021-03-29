import React, { useState, useEffect } from "react";
import styles from "./GamePage.module.css";
import global from "../../styles/global.module.css";
import rawg from "../../data/rawg";

import { useParams } from "react-router-dom";

import GameTitle from "./GameTitle/GameTitle";
import GameTags from "./GameTags/GameTags";

const GamePage = () => {
  const params = useParams();

  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  //  const description = game.description.replace('<p>','').split('</p>')
  useEffect(() => {
    async function fetchData() {
      const response = await rawg.gameSigle(params.id);
      setGame(response);
      setLoading(false);
    }
    fetchData();
  }, [params]);

  return (
    <>
      <header>
        <img className={styles.gamePhoto} src={loading ? "" : game.background_image} alt={loading ? "" : game.name} />
      </header>
      <div className={global.mwfix}>
        <div className={styles.headerContainer}>
          <div className={styles.leftContent}>
            <GameTitle load={loading} game={game} />
          </div>

          <div className={styles.rightContent}>
          <GameTags tags={game.tags} load={loading} />
          </div>
        </div>
      </div>

      <div className={styles.modalContent}></div>
    </>
  );
};

export default GamePage;
