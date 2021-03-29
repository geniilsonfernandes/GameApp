import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//css
import styles from "./CategorieTittle.module.css";
//comps
import Skeleton from "../../../components/utilities/skeleton/Skeleton";

//functions
const fetchGenre = async (id) => {
  const response = await fetch(`https://api.rawg.io/api/genres/${id}`);
  const dados = await response.json();
  return dados;
};
//

const CategorieTittle = () => {
  const params = useParams();
  const [genre, setGenre] = useState([]);
  const [genreLoading, setGenreLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchGenre(params.id);
      setGenre(response);
      setGenreLoading(false);
    }
    fetchData();
  }, [params]);

  return (
    <div className={styles.title}>
      <h2>{genreLoading ? <Skeleton width={100} mw={"px"} height={36} mh={"px"} /> : genre.name}</h2>
      {genreLoading ? (
        <Skeleton width={100} mw={"%"} height={76} mh={"px"} />
      ) : (
        <p>
          {" "}
          {genre.description.replaceAll("<p>", "").replaceAll("</p>", "").substring(0, 250)}
          ...
        </p>
      )}

      <div className={styles.listControl}>
        <div className={styles.order}>
          <h3>Order</h3>

          <select className={styles.orderOption} id="cars">
            <option value="volvo">nome</option>
            <option value="saab">data</option>
            <option value="opel">rate</option>
            <option value="audi">votes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategorieTittle;
