import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//css
import styles from "./CoverBig.module.css";
import global from "../../styles/global.module.css";
//svg
import BackSvg from "../../svg/cover/BackSvg";
import NextSvg from "../../svg/cover/NextSvg";
//
import Skeleton from "../utilities/skeleton/Skeleton";
import GameInfo from "./coverInfo/GameInfo";
import BtnFavorite from "../utilities/buttons/BtnFavorite";
//
import rawg from "../../data/rawg";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const CoverBig = () => {
  //states
  const [corrent, setCorrent] = useState(0);
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line
  const [gamesID, setGamesID] = useState([364806, 51325, 42187, 5563, 41494]);

  //
  useEffect(() => {
    async function fetchData() {
      const response = await rawg.gamelist(gamesID);
      setGamelist(response);
      setLoading(false);
      setIsActive(true);
    }
    fetchData();
  }, [gamesID]);
  //

  // index controle
  const nextClick = () => {
    corrent === gamesID.length - 1 ? setCorrent(0) : setCorrent(corrent + 1);
  };
  //
  const nextBack = () => {
    corrent === 0 ? setCorrent(gamesID.length - 1) : setCorrent(corrent - 1);
  };

  //
  return (
    <div className={global.mwfix}>
      <div  className={styles.cover__photo}>
        <img
          className={styles.cover__background}
          src={loading ? " " : gamelist[corrent].background_image}
          alt={loading ? " " : gamelist[corrent].name}
        />

        <div className={styles.game__info}>
          <motion.div animate={isActive ? "open" : "closed"} variants={variants}>
            <GameInfo
              name={loading ? false : gamelist[corrent].name}
              developers={loading ? false : gamelist[corrent].publishers[0].name}
              description={loading ? false : gamelist[corrent].description_raw}
              platforms={loading ? false : gamelist[corrent].parent_platforms}
              loading={loading}
            />
          </motion.div>

          <div className={styles.info__buttons}>
            {loading ? (
              <Skeleton width={38} height={38} mw={"px"} mh={"px"} marginL={0} marginR={8} />
            ) : (
              <BtnFavorite />
            )}
          </div>
        </div>
        <div className={styles.coverBtn}>
          <button disabled={loading} className={styles.button__back} onClick={nextBack}>
            <BackSvg />
          </button>
          <button disabled={loading} className={styles.button__next} onClick={nextClick}>
            <NextSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverBig;
