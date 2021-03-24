import React, {useState ,useEffect} from "react";

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








//api
const apiKey = "?key=2f93b9a7bffb481a9ab214dcdb9530f0";
const fetchBasic = async (id) => {
  const response = await fetch(`https://api.rawg.io/api/games/${id}${apiKey}`);
  const dados = await response.json();
  return dados;
};

//418467
const Coversingle = () => {
  

  const [game, setGame] = useState({});
  const [carregando, setCarregando] = useState(true);
  
  
  useEffect(() => {
    const loadDate = async () => {
      //get dados
      let r = await fetchBasic(418467);
      //
      setGame(r);
      console.log(r);
      //
    };
    loadDate();
  }, []);

  useEffect(() => {
    if (game!=={}) {
      setCarregando(true)
      console.log('tem dados');
    }else{
      console.log('n tem dados');
    }
  }, [game])



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
          <div className={styles.info__name}>{
            carregando
          }
            <h1>{true ? <Skeleton width={330} height={36} /> : game.name}</h1>
          </div>
          <div className={styles.info__publisher}>
            {true ? (
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
          {true ? (
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
