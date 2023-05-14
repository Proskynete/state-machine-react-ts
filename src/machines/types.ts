export interface Country {
  name: {
    common: string;
  };
}

export interface CountryList {
  countries: Country[];
}

export interface Context {
  passengers: string[];
  countrySelected: string;
  countries: CountryList[];
  error: string;
}

export type Events =
  | { type: "START" }
  | { type: "CONTINUE"; countrySelected: string }
  | { type: "CANCEL" }
  | { type: "ADD"; passenger: string }
  | { type: "DONE" }
  | { type: "FINISH" }
  | { type: "ERROR" }
  | { type: "RETRY" }
  | { type: "onDone"; data: CountryList[] };
