import { TicketsProps } from "./types";
import "./index.css";

const Tickets = ({ state, send }: TicketsProps) => {
  const finish = () => {
    send("FINISH");
  };

  return (
    <div className="tickets">
      <p className="tickets-description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="tickets-ticket">
        <div className="tickets-country">Chile</div>
        <div className="tickets-passengers">
          <div>
            {state.context.passengers.map((person: string) => (
              <p key={person}>{person}</p>
            ))}
          </div>
          <span>✈</span>
        </div>
      </div>

      <button onClick={finish} className="tickets-finalizar button">
        Finalizar
      </button>
    </div>
  );
};

export { Tickets };
