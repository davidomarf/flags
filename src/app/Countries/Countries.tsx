import React, { useCallback } from "react";

import { Country } from "../types/Country";

import styles from "./Countries.module.scss";

type CountriesProps = {
  countries: Country[];
  focusCountry?: (e: Country) => void;
};

const Countries = ({ countries, focusCountry }: CountriesProps) => {
  const handleCountryClick = useCallback(
    (country: Country) => {
      if (focusCountry) {
        focusCountry(country);
      }
    },
    [focusCountry]
  );

  return (
    <div className={styles.container}>
      {countries.map((e, i) => (
        <div
          className={styles.country}
          key={e.name}
          onClick={() => handleCountryClick(e)}
        >
          <div className={styles.fullHeightContainer}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${e.flag})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            ></div>
            <div className={styles.info}>
              <div className={styles.name}>{e.name}</div>
              <div className={styles.details}>
                <div>
                  <b>Population: </b>
                  {e.population.toLocaleString()}
                </div>
                <div>
                  <b>Region: </b>
                  {e.region}
                </div>
                <div>
                  <b>Capital: </b>
                  {e.capital}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
