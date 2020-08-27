import React from "react";

import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.App}>
    <Header />
    <div className={styles.mainContent}>
      <SearchBar />
    </div>
  </div>
);

export default App;
