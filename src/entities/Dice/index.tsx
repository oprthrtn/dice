import { DiceSides } from "shared/entities";
import { DiceStyled } from "./styled";

type DiceProps = {
  side?: DiceSides;
};
export const Dice = ({ side = 1 }: DiceProps) => {
  return (
    <DiceStyled>
      <div id="dice1" className={`dice show-${side}`}>
        <div id="dice-one-side-one" className="side one">
          <div className="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" className="side two">
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" className="side three">
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" className="side four">
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" className="side five">
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" className="side six">
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div>
    </DiceStyled>
  );
};
