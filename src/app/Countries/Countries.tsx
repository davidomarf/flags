import React from "react";

import { Country } from "../types/Country";

import styles from "./Countries.module.scss";
import { Link } from "react-router-dom";

type CountriesProps = {
  countries: Country[];
};

const Countries = ({ countries }: CountriesProps) => {
  return (
    <div className={styles.container}>
      {countries.map((e, i) => (
        <Link
          to={"countries/" + e.alpha3Code}
          className={styles.country}
          key={e.name}
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
                  {e.population?.toLocaleString()}
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
        </Link>
      ))}
    </div>
  );
};

export default Countries;
