import React, { useEffect } from "react";
import useCover from "../../../hooks/useCover";

// css
import styles from "./Coversingle.module.css";
import global from "../../../styles/global.module.css";
// svg

import WinSvg from "../../../svg/cover/WinSvg";
import PsSvg from "../../../svg/cover/PsSvg";
import XboxSvg from "../../../svg/cover/XboxSvg";
import MoreSvg from "../../../svg/cover/MoreSvg";
//import RemoveFavorite from "../../svg/cover/RemoveFavorite";
import FavoriteSvg from "../../../svg/nav/FavoriteSvg";
import Skeleton from "../../utilities/skeleton/Skeleton";

const Coversingle = () => {
  const { getGame, load, game } = useCover();

  useEffect(() => {
    const init = () => {
      getGame(418467);
    };
    init();
  }, []);

  return (
    <div className={global.mwfix}>
      <div className={styles.categories__title}>
        <h2>
          <span>Special</span> this week
        </h2>
        <div className={styles.divisor1}></div>
      </div>
      <div className={styles.cover__photo}>
        <div className={styles.game__info}>
          <div className={styles.info__name}>
            <h1>{load ? <Skeleton width={330} height={36} /> : game.name}</h1>
          </div>
          <div className={styles.info__publisher}>
            {load ? (
              <Skeleton width={130} height={24} />
            ) : (
              <p>{game.publishers[0].name}</p>
            )}
            <div className={styles.info__platforms}>
              <PsSvg />
              <WinSvg />
              <XboxSvg />
            </div>
          </div>
          <div className={styles.divisor}> </div>
          <div className={styles.description}>
          {load ? (
              <Skeleton width={130} height={24} />
            ) : (
              <p>{game.description_raw.substring(0, 150) + "..."}</p>
            )}
          </div>
          <div className={styles.info__buttons}>
            <button className={styles.button__more}>
              <p>View more</p>
              <MoreSvg />{" "}
            </button>

            <button className={styles.button__favorite}>
              <p>Add favorite</p>
              <FavoriteSvg />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coversingle;
