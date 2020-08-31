import React from "react";

import { Country } from "../types/Country";

import styles from "./Countries.module.scss";
import { Link } from "react-router-dom";
import CountriesSkeleton from "./CountriesSkeleton";

type CountriesProps = {
  countries?: Country[];
  skeleton?: boolean;
};

const Countries = ({ countries, skeleton }: CountriesProps) => {
  if (countries && !skeleton) {
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
                  backgroundImage: `url(${e.flag})`
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
  }

  return <CountriesSkeleton />;
};

export default Countries;
