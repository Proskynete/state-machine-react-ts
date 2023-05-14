import { NavProps } from "./types";
import "./index.css";

const Nav = ({ state, send }: NavProps) => {
  const goToWelcome = () => {
    send("CANCEL");
  };

  return (
    <nav className="nav">
      <h1 className="nav-logo">Booking a Fly 🛫</h1>
      {!state.matches("initial") && (
        <button onClick={goToWelcome} className="nav-cancel button-secondary">
          Cancelar
        </button>
      )}
    </nav>
  );
};

export { Nav };
