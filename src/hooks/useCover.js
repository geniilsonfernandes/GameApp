import { useState } from "react";
// configs

//api
const apiKey = "?key=2f93b9a7bffb481a9ab214dcdb9530f0";

// use
const useCover = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);

  // games para header
  const gametoHeader = [];
  //
  async function searchGamesToHeader(game, array) {
    const response = await fetch(
      `https://api.rawg.io/api/games/${game}${apiKey}`
    );
    const dados = await response.json();
    gametoHeader.push(dados);
    //
    if (gametoHeader.length === array.length) {
      setGames([...games, ...gametoHeader]);
      setLoading(false);
    }
  }
  //
  const coverLoad = (list) => {
    list.forEach((game) => {
      searchGamesToHeader(game, list);
    });
  };
  //
  const [game,setGameOn] = useState({})

  async function getGameFetch(id) {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}${apiKey}`
    );
    const r = await response.json();
    setGameOn(r)
    setLoad(false);
  }
  //
  const getGame = (id) => {
    getGameFetch(id);
  };
  //
  //
  return { games, coverLoad, loading, getGame, load, game };
};

export default useCover;
