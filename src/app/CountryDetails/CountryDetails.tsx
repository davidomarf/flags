import React from "react";

import { Country } from "../types/Country";

import styles from "./CountryDetails.module.scss";

type CountryProps = {
  country?: Country;
};
const CountryDetails = ({ country }: CountryProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${country?.flag})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
      <div className={styles.info}>
        <div className={styles.name}>{country?.name}</div>
        <div className={styles.details}>
          <div className={styles.column}>
            <Field name="Native Name" value={country?.nativeName} />
            <Field
              name="Population"
              value={country?.population?.toLocaleString()}
            ></Field>
            <Field name="Region" value={country?.region} />
            <Field name="Sub-region" value={country?.subregion} />
            <Field name="Capital" value={country?.capital} />
          </div>
          <div className={styles.column}>
            <Field name="Top Level Domain" value={country?.topLevelDomain} />
            <Field
              name="Currencies"
              values={country?.currencies?.map(
                (e) => `${e.symbol} (${e.name})`
              )}
            />
            <Field
              name="Languages"
              values={country?.languages?.map((e) => e.name)}
            />
          </div>
        </div>
        <div className={styles.bottomText}>
          <Field name="Border Countries" values={country?.borders}></Field>
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

export default CountryDetails;
