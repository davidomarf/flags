import React from "react";

import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Filter from "./Filter/Filter";

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.App}>
    <Header />
    <div className={styles.mainContent}>
      <SearchBar />
      <Filter />
    </div>
  </div>
);

export default App;
