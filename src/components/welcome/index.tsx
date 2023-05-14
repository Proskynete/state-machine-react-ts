import { WelcomeProps } from "./types";
import "./index.css";

const Welcome = ({ send }: WelcomeProps) => {
  const startBooking = () => {
    send("START");
  };

  return (
    <div className="welcome">
      <p className="welcome-title title">¡Hoy es el día!</p>
      <p className="welcome-description description">
        Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender
        las maravillas que hay para explorar
      </p>

      <button onClick={startBooking} className="welcome-cancel button">
        Comenzar
      </button>
    </div>
  );
};

export { Welcome };
