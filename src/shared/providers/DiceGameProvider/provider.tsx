import { PropsWithChildren, useState } from "react";
import { DiceSides, DiceForm } from "shared/entities";
import { DiceGameContext } from "./context";

export const DiceGameProvider = ({
  children,
  initialBalance,
}: PropsWithChildren & { initialBalance: number }) => {
  const [balance, setBalance] = useState<number>(initialBalance);
  const [currentSide, setCurrentSide] = useState<DiceSides>(1);

  const randomizeSide = ({ type, bet }: DiceForm) => {
    const newSide = Math.floor(Math.random() * 6) + 1;

    setCurrentSide(newSide as DiceSides);

    switch (type) {
      case "ONE_TO_THREE":
        setBalance((balance) => {
          const isOneToThree = newSide >= 1 && newSide <= 3;

          if (isOneToThree) {
            return balance + bet * 2;
          } else {
            return balance - bet;
          }
        });
        return;
      case "FOUR_TO_SIX":
        setBalance((balance) => {
          const isFourToSix = newSide >= 4 && newSide <= 6;
          if (isFourToSix) {
            return balance + bet * 2;
          } else {
            return balance - bet;
          }
        });
        return;
      case "EVEN":
        setBalance((balance) => {
          const isEven = newSide % 2 === 0;
          if (isEven) {
            return balance + bet * 2;
          } else {
            return balance - bet;
          }
        });
        return;
      case "ODD":
        setBalance((balance) => {
          const isOdd = newSide % 2 !== 0;
          if (isOdd) {
            return balance + bet * 2;
          } else {
            return balance - bet;
          }
        });
        return;
      default:
        setBalance((balance) => {
          const isSame = newSide === type;
          if (isSame) {
            return balance + bet * 3;
          } else {
            return balance - bet;
          }
        });
        return;
    }
  };
  return (
    <DiceGameContext.Provider value={{ currentSide, balance, randomizeSide }}>
      {children}
    </DiceGameContext.Provider>
  );
};
