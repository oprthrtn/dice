import { usePrevious } from "shared/common";

type DiceGameHeaderProps = {
  balance: number;
  currentSide: number;
};
export const DiceGameHeader = ({
  balance,
  currentSide,
}: DiceGameHeaderProps) => {
  const previousBalance = usePrevious(balance);

  const isInitial = previousBalance === undefined;
  const isWin = previousBalance && balance > previousBalance;

  if (isInitial) {
    return <b>Сделайте ставку</b>;
  }

  return (
    <div className="info">
      <b>Результат броска кубика: {currentSide}</b>

      <span>
        {isWin
          ? `Вы выиграли ${balance - previousBalance} TND!`
          : `Повезет в следующий раз!`}
      </span>
    </div>
  );
};
