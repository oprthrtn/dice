import { WithAuth } from "shared/HOC/WithAuth";
import { Button } from "shared/ui";
import { AppHeaderStyled } from "./styled";
import { Login } from "features/Login";
import { useEffect, useState } from "react";
import { User } from "shared/entities";
import { AppApi } from "shared/api";
import { useDiceGameContext } from "shared/providers";

export const AuthInfo = () => {
  const [user, setUser] = useState<User>();
  const { balance } = useDiceGameContext();
  useEffect(() => {
    AppApi.me().then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <>
      <span>{user?.login}</span> <br />
      <span>{balance} (TND)</span>
    </>
  );
};
export const AppHeader = () => {
  return (
    <AppHeaderStyled>
      <h1>Test Game</h1>

      <div className="content">
        <WithAuth
          auth={<AuthInfo />}
          unAuth={
            <>
              <Login />
              <Button disabled>Регистрация</Button>
            </>
          }
        />
      </div>
    </AppHeaderStyled>
  );
};
