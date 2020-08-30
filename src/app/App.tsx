import React, { useState, useCallback, lazy, Suspense } from "react";
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

import styles from "./App.module.scss";

const Countries = lazy(() => import("./Countries/Countries"));
const CountryDetails = lazy(() => import("./CountryDetails/CountryDetails"));

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
        <div className={styles.mainContent}>
          <Switch>
            <Route path="/countries/:id">
              <div className={styles.row}>
                <SearchBar searchFor={searchFor} />
                <Filter />
              </div>
              <div className={styles.row}>
                <Suspense fallback={<></>}>
                  <CountryDetails />
                </Suspense>
              </div>
            </Route>
            <Route path="/" exact>
              <div className={styles.row}>
                <SearchBar searchFor={searchFor} />
                <Filter />
              </div>
              <Suspense fallback={<></>}>
                <div className={styles.row}>
                  {isLoading || error ? (
                    <></>
                  ) : data ? (
                    <Countries
                      countries={data.filter((e) => e.name?.match(query))}
                    />
                  ) : null}
                </div>
              </Suspense>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
