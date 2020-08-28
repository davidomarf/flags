import React from "react";

import { ReactComponent as Lens } from "../../assets/icons/lens-light.svg";

import style from "./SearchBar.module.scss";

const SearchBar = () => (
  <div className={style.searchBar}>
    <div className={style.field}>
      <span>
        <Lens />
      </span>
      <input placeholder="Search for a country..."></input>
    </div>
  </div>
);

export default SearchBar;
