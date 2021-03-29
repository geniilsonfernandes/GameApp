import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//css
import Grid from "./GridCard.module.css";
//comps
import Skeleton from "../../../components/utilities/skeleton/Skeleton";
import CardGame from "../CardGame/CardGame";
//svg
import LoadingSvg from "../../../svg/Loading/LoadingSvg";
//api
const apiKey = "key=2f93b9a7bffb481a9ab214dcdb9530f0";

//functions
const fetchBasic = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?genres=${id}&${apiKey}`
  );
  const dados = await response.json();
  return dados;
};
//
const FetchPage = async (url) => {
  const response = await fetch(url);
  const dados = await response.json();
  return dados;
};
//

const GridCard = () => {
  const params = useParams();
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [loadingNext, setLoadingNext] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchBasic(params.id);
      setLoading(false);
      setNext(response.next);
      setGamelist(response.results);
    }

    fetchData();
  }, [params]);

  const nextPage = async (url) => {
    setLoadingNext(true);
    const response = await FetchPage(url);

    setNext(response.next);
    setLoadingNext(false);
    setGamelist([...gamelist, ...response.results]);
  };

  return (
    <>
      <div className={Grid.grid}>
        {loading
          ? [...new Array(16)].map((item, id) => {
              return (
                <Skeleton
                  key={id}
                  width={100}
                  mw={"%"}
                  height={270}
                  mh={"px"}
                />
              );
            })
          : gamelist.map((item) => (
              <CardGame
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.background_image}
                metacritic={item.metacritic}
              />
            ))}
      </div>
      <div className={Grid.seemore}>
        <div
          className={Grid.seemoreBtn}
          onClick={() => {
            nextPage(next);
          }}
        >
          {loadingNext ? <LoadingSvg /> : "See more"}{" "}
        </div>
      </div>
    </>
  );
};

export default GridCard;
