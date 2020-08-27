import React from "react";

import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Filter from "./Filter/Filter";

import styles from "./App.module.scss";

const countries = [
  {
    name: "Germany",
    population: 81770900,
    region: "Europe",
    capital: "Berlin"
  },
  {
    name: "Brazil",
    population: 201770900,
    region: "Americas",
    capital: "Brasilia"
  }
];

const App = () => (
  <div className={styles.App}>
    <Header />
    <div className={styles.mainContent}>
      <div className={styles.row}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles.row}>
        <Countries countries={countries.concat(countries.concat(countries))} />
      </div>
    </div>
  </div>
);

export default App;
