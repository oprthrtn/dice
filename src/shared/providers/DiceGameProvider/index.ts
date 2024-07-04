import { useContext } from "react";
import { DiceGameContext } from "./context";

export { DiceGameProvider } from "./provider";

export const useDiceGameContext = () => {
  const context = useContext(DiceGameContext);

  if (!context) {
    throw new Error('use "useDiceGameProvider" in "DiceGameProvider"');
  }

  return context;
};
