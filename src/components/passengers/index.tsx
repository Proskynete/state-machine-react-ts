import { ChangeEvent, FormEvent, useState } from "react";
import { PassengersProps } from "./types";
import "./index.css";

const Passengers = ({ state, send }: PassengersProps) => {
  const [value, setValue] = useState("");
  const { passengers } = state.context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const goToTickets = () => {
    send("DONE");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send("ADD", { passenger: value });
    setValue("");
  };

  return (
    <form className="passengers" onSubmit={handleSubmit}>
      <p>Agregar a las personas que van a volar 🛫</p>
      {passengers.map((passenger: string) => (
        <p className="text" key={`passenger-${passenger}`}>
          {passenger}
        </p>
      ))}

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribir nombre completo"
        required
        value={value}
        onChange={handleChange}
      />

      <div className="passengers-buttons">
        <button className="passengers-adds button-secondary" type="submit">
          Agregar pasajero
        </button>

        <button
          className="passenger-pay button"
          type="button"
          onClick={goToTickets}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};

export { Passengers };
