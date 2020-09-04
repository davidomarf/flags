import React, { useState, useCallback, lazy, Suspense, useEffect } from "react";
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

import styles from "./App.module.scss";
import BackButton from "./BackButton/BackButton";

const CountryDetails = lazy(() => import("./CountryDetails/CountryDetails"));

const App = () => {
  const [query, setQuery] = useState<string>();
  const [reQuery, setReQuery] = useState<RegExp>(new RegExp("."));
  const [region, setRegion] = useState<string>();
  const [countryMap, setCountryMap] = useState<{ [key: string]: string }>();

  const { data, isLoading, error } = useQuery<Country[]>(
    "countries",
    fetchCountries
  );

  const searchFor = useCallback(
    (query: string) => {
      setQuery(query);
      setReQuery(new RegExp(query, "i"));
    },
    [setQuery, setReQuery]
  );

  useEffect(() => {
    if (!isLoading && !error && data) {
      const countryMap: { [key: string]: string } = {};
      for (const country of data) {
        if (!countryMap[country.alpha3Code]) {
          countryMap[country.alpha3Code] = country.name!;
        }
      }

      setCountryMap(countryMap);
    }
  }, [data, isLoading, error]);

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <div className={styles.mainContent}>
          <Switch>
            <Route path="/countries/:id">
              <div className={styles.row}>
                <BackButton />
              </div>
              <div className={styles.row}>
                <Suspense fallback={<></>}>
                  <CountryDetails countryMap={countryMap} />
                </Suspense>
              </div>
            </Route>
            <Route path="/" exact>
              <div className={styles.row}>
                <SearchBar searchFor={searchFor} initial={query} />
                <Filter setRegion={setRegion} region={region} />
              </div>
              <Suspense fallback={<></>}>
                <div className={styles.row}>
                  {isLoading ? (
                    <Countries skeleton={true} />
                  ) : error ? (
                    <>We couldn't load the countries ansorrywe</>
                  ) : data ? (
                    <Countries
                      countries={data.filter(
                        (e) =>
                          e.name?.match(reQuery) &&
                          (!region || e.region === region)
                      )}
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

const fetchCountries = () =>
  fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json());
