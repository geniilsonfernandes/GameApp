import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../../../components/utilities/skeleton/Skeleton";
import style from "./GameTags.module.css";

const GameTags = (props) => {
  const { tags } = props;
  const { load } = props;
  return (
    <>
      <div className={style.tagTitle}>Tags:</div>
      <div className={style.tagGrid}>
        {load
          ? [...new Array(16)].map((item, id) => {
              return <Skeleton key={id} width={100} mr={'8'} mw={"px"} height={30} mh={"px"} />;
            })
          : tags.map((item) => (
              <div key={item.id} className={style.tag}>
                <Link to="/">{item.name}</Link>
              </div>
            ))}
      </div>
    </>
  );
};

export default GameTags;
