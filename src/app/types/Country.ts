export type Country = {
  name?: string;
  alpha3Code: string;
  topLevelDomain?: string;
  callingCodes?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  population?: number;
  borders?: string[];
  nativeName?: string;
  currencies?: Currency[];
  languages?: Language[];
  flag?: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};
