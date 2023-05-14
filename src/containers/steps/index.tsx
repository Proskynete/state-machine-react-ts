import { Welcome } from "../../components/welcome";
import { Search } from "../../components/search";
import { Tickets } from "../../components/tickets";
import { Passengers } from "../../components/passengers";
import { StepsProps } from "./types";
import "./index.css";

const StepsLayout = ({ state, send }: StepsProps) => {
  const renderContent = () => {
    if (state.matches("initial")) return <Welcome send={send} />;
    if (state.matches("search")) return <Search state={state} send={send} />;
    if (state.matches("tickets")) return <Tickets state={state} send={send} />;
    if (state.matches("passengers"))
      return <Passengers state={state} send={send} />;
    return null;
  };

  return <div className="steps-layout">{renderContent()}</div>;
};

export { StepsLayout };
