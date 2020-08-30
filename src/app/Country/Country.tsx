import React from "react";
import { Country } from "../App";

type CountryProps = {
  country: Country;
};
const CountryDetails = ({ country }: CountryProps) => {
  return (
    <>
      <pre>{JSON.stringify(country, null, 2)}</pre>
    </>
  );
};

export default CountryDetails;
