import React, { memo } from "react";
import { useParams, Link } from "react-router-dom";

import { Country } from "../types/Country";

import styles from "./CountryDetails.module.scss";
import { useQuery } from "react-query";

const CountryDetails = () => {
  const { id } = useParams();

  const { data: country, isLoading } = useQuery<Country>(id, fetchCountry);

  if (country && !isLoading) {
    return (
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${country.flag})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        ></div>
        <div className={styles.info}>
          <div className={styles.name}>{country.name}</div>
          <div className={styles.details}>
            <div className={styles.column}>
              <Field name="Native Name" value={country.nativeName} />
              <Field
                name="Population"
                value={country.population?.toLocaleString()}
              />
              <Field name="Region" value={country.region} />
              <Field name="Sub-region" value={country.subregion} />
              <Field name="Capital" value={country.capital} />
            </div>
            <div className={styles.column}>
              <Field name="Top Level Domain" value={country.topLevelDomain} />
              <Field
                name="Currencies"
                values={country.currencies?.map(
                  (e) => `${e.symbol} (${e.name})`
                )}
              />
              <Field
                name="Languages"
                values={country.languages?.map((e) => e.name)}
              />
            </div>
          </div>
          <div className={styles.bottomText}>
            {country.borders && country.borders.length > 0 ? (
              <div>
                <b>Border Countries: </b>
                {country.borders.map((e, i) => (
                  <>
                    <Link to={`/countries/${e}`} key={e}>
                      {e}
                    </Link>
                    {i < country.borders!.length - 1 && " · "}
                  </>
                ))}
              </div>
            ) : (
              <div>
                <b>No border countries</b>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.skeleton}`}>
      <div
        className={styles.image}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.075)"
        }}
      ></div>
      <div className={styles.info}>
        <div className={styles.name}>
          <Skeleton />
        </div>
        <div className={styles.details}>
          <div className={styles.column}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          <div className={styles.column}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <div className={styles.bottomText}>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

type FieldProps = {
  name: string;
  value?: string;
  values?: string[];
};

const Field = ({ name, value, values }: FieldProps) => (
  <div>
    <b>{name}: </b>
    {values ? values.join(" · ") : value}
  </div>
);

const Skeleton = memo(() => (
  <div
    style={{ width: `${Math.min(Math.max(Math.random(), 0.3), 0.8) * 100}%` }}
  ></div>
));

const fetchCountry = async (id: string) =>
  (
    await fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${id}`
    ).then((res) => res.json())
  )[0];

export default CountryDetails;
