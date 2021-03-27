import React, { useState, useEffect } from "react";
import global from "../../styles/global.module.css";
import categorie from "./Categorie.module.css";
import Skeleton from "../../components/utilities/skeleton/Skeleton";
import { useParams } from "react-router-dom";
import CardGame from "../../components/utilities/cardGame/CardGame";
import LoadingSvg from "../../svg/Loading/LoadingSvg";

const apiKey = "key=2f93b9a7bffb481a9ab214dcdb9530f0";
//fetch
const fetchBasic = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?genres=${id}&${apiKey}`
  );

  const dados = await response.json();

  return dados;
};

const FetchPage = async (url) => {
  const response = await fetch(url);
  const dados = await response.json();
  return dados;
};

const fetchGenre = async (id) => {
  const response = await fetch(`https://api.rawg.io/api/genres/${id}`);
  const dados = await response.json();
  return dados;
};

//comp
const Categorie = () => {
  const params = useParams();
  const [gamelist, setGamelist] = useState([]);
  const [genre, setGenre] = useState([]);

  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(true);
  const [genreLoading, setGenreLoading] = useState(true);
  const [loadingNext, setLoadingNext] = useState(false);
  //
  useEffect(() => {
    async function fetchData() {
      const response = await fetchBasic(params.id);
      setLoading(false);
      setNext(response.next);
      setGamelist(response.results);
    }
    fetchData();
  }, [params]);

  useEffect(() => {
    async function fetchData() {
      console.log(params.id);
      const response = await fetchGenre(params.id);
      setGenre(response);
      console.log(response);
      setGenreLoading(false);
    }
    fetchData();
  }, [params]);
  //

  const nextPage = async (url) => {
    setLoadingNext(true);
    const response = await FetchPage(url);
    console.log(response);

    setNext(response.next);
    setLoadingNext(false);
    setGamelist([...gamelist, ...response.results]);
  };


  
  return (
    <section className={global.mwfix}>
      <div className={categorie.title}>
        <h2>
          {genreLoading ? (
            <Skeleton width={100} mw={"px"} height={36} mh={"px"} />
          ) : (
            genre.name
          )}
        </h2>
        {genreLoading ? (
          <Skeleton width={100} mw={"%"} height={76} mh={"px"} />
        ) : (
          <p>
            {" "}
            {genre.description
              .replaceAll("<p>", "")
              .replaceAll("</p>", "").substring(0, 250)}...
          </p>
        )}
        <div className={categorie.listControl}>
          <div className={categorie.order}>
            <h3>Order</h3>

            <select className={categorie.orderOption} id="cars">
              <option value="volvo">nome</option>
              <option value="saab">data</option>
              <option value="opel">rate</option>
              <option value="audi">votes</option>
            </select>
          </div>
        </div>
      </div>
      <div className="gridteste">
        <div className={categorie.grid}>
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
      </div>

      <div className={categorie.seemore}>
        <div
          className={categorie.seemoreBtn}
          onClick={() => {
            nextPage(next);
          }}
        >
          {loadingNext ? <LoadingSvg /> : "See more"}{" "}
        </div>
      </div>
    </section>
  );
};

export default Categorie;
