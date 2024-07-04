export type DiceSides = 1 | 2 | 3 | 4 | 5 | 6;

export enum BetType {
  EVEN = "EVEN",
  ODD = "ODD",
  ONE_TO_THREE = "ONE_TO_THREE",
  FOUR_TO_SIX = "FOUR_TO_SIX",
}

export type DiceForm = {
  type: `${BetType}` | number;
  bet: number;
};
