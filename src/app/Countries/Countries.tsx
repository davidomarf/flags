import React from "react";

import styles from "./Countries.module.scss";
import { Country } from "../App";

type CountriesProps = {
  countries: Country[];
};

const Countries = ({ countries }: CountriesProps) => {
  return (
    <div className={styles.container}>
      {countries.map((e) => (
        <div className={styles.country}>
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
