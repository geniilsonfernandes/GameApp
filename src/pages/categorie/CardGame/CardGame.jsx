import React from "react";
import card from "./CardGame.module.css";

//svg
import NextSvg from "../../../svg/cover/NextSvg";


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
        <h2>{name}</h2>
        <div className={card.descrip}>
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
