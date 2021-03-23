import React, { useState } from "react";
//css
import styles from "./nav.module.css";
import global from "../../styles/global.module.css";
//svg
import Logo from "../../svg/nav/Logo";
import Favorite from "../../svg/nav/FavoriteSvg";
import InputNav from "./InputNav";
import SearchSvg from "../../svg/nav/SearchSvg";
import { Link } from "react-router-dom";

// comp
const Nav = (props) => {
  const [searchValue, setSeachValue] = useState("");
  const handlerChanger = (e) => {
    setSeachValue(e.target.value);
  };

  return (
    <section className={global.mwfix}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <Link to="/" > <Logo colorOne="#757578" colorTwo="#202528" /> </Link> 
          
        </div>
        <div className={styles.nav__input}>
          <InputNav
            placeholder="Search game..."
            value={searchValue}
            onChange={handlerChanger}
          />
          <span className={styles.inputIcon}>
            <SearchSvg />
          </span>
        </div>
        <div className={styles.nav__favorites}>
          <Favorite />
        </div>
      </nav>
    </section>
  );
};

export default Nav;
