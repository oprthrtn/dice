import { DiceGameWrapperStyled } from "./styled";
import { Dice } from "entities/Dice";
import { DiceGameForm } from "./ui";

import { DiceGameHeader } from "./ui/DiceGameHeader";
import { useDiceGameContext } from "shared/providers";

type DiceGameProps = {
  disabled?: boolean;
};

export const DiceGame = ({ disabled = false }: DiceGameProps) => {
  const { currentSide, randomizeSide, balance } = useDiceGameContext();

  return (
    <DiceGameWrapperStyled $disabled={disabled}>
      <div className="header">
        {disabled ? (
          <b>Войдите чтобы продолжить</b>
        ) : (
          <DiceGameHeader balance={balance} currentSide={currentSide} />
        )}
      </div>

      <div className="dice-wrapper">
        <Dice side={currentSide} />
      </div>

      <DiceGameForm onSubmitHanlder={randomizeSide} disabled={disabled} />
    </DiceGameWrapperStyled>
  );
};
