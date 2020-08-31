import React, { memo } from "react";

import { Country } from "../types/Country";

import styles from "./Countries.module.scss";
import { Link } from "react-router-dom";

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

  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className={`${styles.container} ${styles.skeleton}`}>
      {mock.map(() => (
        <div className={styles.country}>
          <div className={styles.fullHeightContainer}>
            <div className={styles.image} />
            <div className={styles.info}>
              <Skeleton className={styles.name} />
              <div className={styles.details}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Skeleton = memo(({ className }: { className?: string }) => (
  <div
    style={{ width: `${Math.min(Math.max(Math.random(), 0.3), 0.8) * 100}%` }}
    className={className}
  ></div>
));

export default Countries;
