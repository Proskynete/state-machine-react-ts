import { useMachine } from "@xstate/react";
import { Nav } from "../../components/nav";
import { StepsLayout } from "../steps";
import { bookingMachine } from "../../machines/bookingMachine";
import "./index.css";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  return (
    <div className="base-layout">
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
};
