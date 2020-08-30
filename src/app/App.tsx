import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useQuery } from "react-query";

import { Country } from "./types/Country";

import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Filter from "./Filter/Filter";
import Countries from "./Countries/Countries";
import CountryDetails from "./CountryDetails/CountryDetails";

import styles from "./App.module.scss";

const App = () => {
  const [query, setQuery] = useState<RegExp>(new RegExp("."));

  const { data, isLoading, error } = useQuery<Country[]>(
    "Countries",
    async () =>
      await fetch("https://restcountries.eu/rest/v2/all").then((res) =>
        res.json()
      )
  );

  const searchFor = useCallback(
    (query: string) => {
      setQuery(new RegExp(query, "i"));
    },
    [setQuery]
  );

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/countries/:id">
            <CountryDetails />
          </Route>
          <Route path="/" exact>
            <div className={styles.mainContent}>
              <div className={styles.row}>
                <SearchBar searchFor={searchFor} />
                <Filter />
              </div>

              {isLoading ? (
                <>Loading...</>
              ) : error ? (
                <>Error. :(</>
              ) : data ? (
                <div className={styles.row}>
                  <Countries
                    countries={data.filter((e) => e.name?.match(query))}
                  />
                </div>
              ) : null}
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
