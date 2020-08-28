import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";

import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Filter from "./Filter/Filter";
import Countries from "./Countries/Countries";

import styles from "./App.module.scss";

export type Country = {
  name: string;
  topLevelDomain: string;
  callingCodes: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  borders: string[];
  nativeName: string;
  currencies: Currency[];
  languages: Language[];
  flag: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

const App = () => {
  const { data, isLoading, error } = useQuery<Country[]>(
    "Countries",
    async () =>
      await fetch("https://restcountries.eu/rest/v2/all").then((res) =>
        res.json()
      )
  );

  const [query, setQuery] = useState<RegExp>(new RegExp("."));

  const searchFor = useCallback(
    (query: string) => {
      setQuery(new RegExp(query, "i"));
    },
    [setQuery]
  );

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.row}>
          <SearchBar searchFor={searchFor} />
          <Filter />
        </div>
        <div className={styles.row}>
          {isLoading ? (
            <>Loading...</>
          ) : error ? (
            <>Error. :(</>
          ) : data ? (
            <Countries countries={data.filter((e) => e.name.match(query))} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default App;
