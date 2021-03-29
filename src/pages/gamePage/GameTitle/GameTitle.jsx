import React,{useRef} from "react";
import styles from "./GameTitle.module.css";
import BtnFavorite from "../../../components/utilities/buttons/BtnFavorite";
import Skeleton from "../../../components/utilities/skeleton/Skeleton";

const GameTitle = (props) => {
  const { load } = props;
  const { game } = props;
  
  const descriptionEl = useRef(null);
  const maskEl = useRef(null);
  const onButtonClick = () => {
    const mask = maskEl.current
    const description = descriptionEl.current.clientHeight
    
    if (mask.clientHeight===50) {
      mask.style.height = `${description}px`
    }else{
      mask.style.height = `50px`
    }

  };
  return (
    <>
      <div className={styles.gameInfo}>
        <div className={styles.btnFavorite}>
          <BtnFavorite />
        </div>

        <div className={styles.gameRating}>{load ? '00' : game.metacritic}</div>
        <h2>{load ? <Skeleton width={50} mw={"%"} height={24} mh={"px"} /> : game.name}</h2>
        <div className={styles.description}>
      
          <div ref={maskEl} className={styles.descriptionMask}>
          {load ? <Skeleton width={100} mw={"%"} height={54} mh={"px"} /> : <p ref={descriptionEl} >{game.description_raw}</p>}
          </div>
          <div className={styles.Read} onClick={onButtonClick}>Read more</div>
        </div>
      </div>
    </>
  );
};

export default GameTitle;
