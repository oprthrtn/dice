import { Button, Select } from "shared/ui";
import {
  FormStyled,
  SpecificNumberStyled,
  RadioInputWrapperStyled,
} from "./styled";
import { useForm } from "react-hook-form";
import { BetType, DiceForm } from "shared/entities";

const betTypeToStringRecord: Record<BetType, string> = {
  [BetType.EVEN]: "Четное",
  [BetType.ODD]: "Нечетное",
  [BetType.ONE_TO_THREE]: "От 1 до 3",
  [BetType.FOUR_TO_SIX]: "От 4 до 6",
};

type DiceGameFormProps = {
  onSubmitHanlder: (data: DiceForm) => void;
  disabled?: boolean;
};

const betOptions = [1, 5, 10, 15, 20].map((bet) => {
  return {
    label: bet.toFixed(2),
    value: bet,
  };
});

export const DiceGameForm = ({
  onSubmitHanlder,
  disabled,
}: DiceGameFormProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<DiceForm>();

  const currentBet = watch("bet");
  const currentType = watch("type");

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitHanlder)}>
      <fieldset disabled={disabled}>
        <label>
          <small>Размер ставки</small>
          <Select
            value={currentBet}
            onChange={(value) => {
              setValue("bet", value as number);
            }}
            options={betOptions}
          />
        </label>
        <label className="bet-type-label">
          <small>Варианты ставок</small>
          {Object.values(BetType).map((type) => {
            return (
              <RadioInputWrapperStyled key={type}>
                <input
                  id={type}
                  type="radio"
                  value={type}
                  {...register("type")}
                />
                <label htmlFor={type}>{betTypeToStringRecord[type]}</label>
              </RadioInputWrapperStyled>
            );
          })}
          <SpecificNumberStyled $active={typeof currentType === "number"}>
            <label htmlFor="specificNumber">Конкретое число</label>
            <input
              type="number"
              id="specificNumber"
              min={1}
              max={6}
              onChange={(e) => {
                setValue("type", Number(e.currentTarget.value));
              }}
            />
          </SpecificNumberStyled>
        </label>

        <Button variant="submit" disabled={!currentType || !currentBet}>
          Сделать ставку
        </Button>
      </fieldset>
    </FormStyled>
  );
};
