import { useState } from "react";
import { Country } from "../../machines/types";
import { SearchProps } from "./types";
import "./index.css";

const Search = ({ state, send }: SearchProps) => {
  const [flight, setFlight] = useState("");
  const countries = state.context.countries;

  const gotToPassengers = () => {
    send("CONTINUE", { countrySelected: flight });
  };

  const handleChange = (e: any) => {
    setFlight(e.target.value);
  };

  return (
    <div className="search">
      <p className="search-title title">Busca tu destino</p>

      <select
        id="country"
        className="search-select"
        value={flight}
        onChange={handleChange}
      >
        <option value="" disabled>
          Selecciona un destino
        </option>
        {countries?.map((option: Country) => (
          <option key={option.name.common} value={option.name.common}>
            {option.name.common}
          </option>
        ))}
      </select>

      <button
        className="search-continue button"
        onClick={gotToPassengers}
        disabled={flight === ""}
      >
        Continuar
      </button>
    </div>
  );
};

export { Search };
