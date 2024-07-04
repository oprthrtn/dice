import { createContext } from "react";
import { DiceSides, DiceForm } from "shared/entities";

type DiceGameValues = {
  balance: number;
  currentSide: DiceSides;
  randomizeSide: (data: DiceForm) => void;
};

export const DiceGameContext = createContext<DiceGameValues | undefined>(
  undefined
);
