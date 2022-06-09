import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";

import CountryDetailsSkeleton from "./CountryDetailsSkeleton";

import { Country } from "../types/Country";

import styles from "./CountryDetails.module.scss";

type CountryDetails = {
  countryMap?: { [key: string]: string };
};
const CountryDetails = ({ countryMap }: CountryDetails) => {
  const { id } = useParams();

  const { data: country, isLoading } = useQuery<Country>(id, fetchCountry);

  if (country && !isLoading) {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={country.flag}
          alt={country.name}
        ></img>
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
              <>
                <b>Border Countries: </b>
                {country.borders.map((e, i) => (
                  <Link to={`/countries/${e}`} key={i}>
                    {countryMap ? countryMap[e] : e}
                  </Link>
                ))}
              </>
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

  return <CountryDetailsSkeleton />;
};

export default CountryDetails;

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

const fetchCountry = async (id: string) =>
  (
    await fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${id}`
    ).then((res) => res.json())
  )[0];
