import { AppHeader } from "widgets/AppHeader";
import { MainStyled } from "./styled";
import { DiceGame } from "widgets/DiceGame";
import { WithAuth } from "shared/HOC";

const Main = () => {
  return (
    <>
      <AppHeader />
      <MainStyled>
        <WithAuth
          auth={<DiceGame key="dice" />}
          unAuth={<DiceGame key="dice" disabled />}
        />
      </MainStyled>
    </>
  );
};

export default Main;
