import React from "react";
import card from "./CardGame.module.css";

//svg
import WinSvg from "../../../svg/cover/WinSvg";
import PsSvg from "../../../svg/cover/PsSvg";
import XboxSvg from "../../../svg/cover/XboxSvg";
import NextSvg from "../../../svg/cover/NextSvg";
import BtnFavorite from "../../utilities/buttons/BtnFavorite";

import { Link } from "react-router-dom";

const CardGame = (props) => {
  const { name } = props;
  const { img } = props;
  const {metacritic} = props
  const {id} = props  
  return (
    <div className={card.cardgame}>
      <div className={card.cardImage}>
        <img className={card.card__background} src={img} alt={name} />
      </div>
      <div className={card.info}>
        <div className={card.ratingCard}>
            {metacritic== null ? '?': metacritic}
        </div>
        <div className={card.favoriteBtn}>
          <BtnFavorite />
        </div>
        <h2>{name}</h2>
        <div className={card.descrip}>
          <div className={card.platforms}>
            <WinSvg color={"#B7B7B7"} />
            <PsSvg color={"#B7B7B7"} />
            <XboxSvg color={"#B7B7B7"} />
          </div>
          <div className={card.dev}>
            <p> Electronic Arts, 2018</p>
          </div>
        </div>
      </div>
      <div className={card.info__buttons}>
        <Link to={`/game/${id}`} >
          {" "}
          Game Page <NextSvg />{" "}
        </Link>
      </div>
    </div>
  );
};

export default CardGame;
