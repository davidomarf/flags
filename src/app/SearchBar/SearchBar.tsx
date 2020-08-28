import React from "react";

import style from "./SearchBar.module.scss";

const SearchBar = () => (
  <div className={style.searchBar}>
    <div className={style.field}>
      <span>O</span>
      <input placeholder="Search for a country..."></input>
    </div>
  </div>
);

export default SearchBar;
