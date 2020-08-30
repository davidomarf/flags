import React, {
  useState,
  useCallback,
  useRef,
  RefObject,
  useEffect
} from "react";
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

const scrollToRef = (ref: RefObject<HTMLDivElement>) =>
  ref?.current &&
  window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });

const App = () => {
  const executeScroll = () => scrollToRef(focusedCountryRef);

  const focusedCountryRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState<RegExp>(new RegExp("."));
  const [focusedCountry, setFocusedCountry] = useState<Country>();

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

  const focusCountry = useCallback(
    (country: Country) => {
      setFocusedCountry(country);
    },
    [setFocusedCountry]
  );

  useEffect(() => {
    executeScroll();
  }, [focusedCountry]);

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
              {focusedCountry && (
                <div className={styles.row} ref={focusedCountryRef}>
                  <CountryDetails country={focusedCountry} />
                </div>
              )}
              {!focusedCountry &&
                (isLoading ? (
                  <>Loading...</>
                ) : error ? (
                  <>Error. :(</>
                ) : data ? (
                  <div className={styles.row}>
                    <Countries
                      countries={data.filter((e) => e.name?.match(query))}
                      focusCountry={focusCountry}
                    />
                  </div>
                ) : null)}
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
