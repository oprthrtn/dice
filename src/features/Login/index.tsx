import { useRef, useState } from "react";
import { Button, Input, Loader } from "shared/ui";
import { LoginFormStyled, LoginModalStyled } from "./styled";
import { useForm } from "react-hook-form";
import { AppApi } from "shared/api";
import { AxiosError } from "axios";

type LoginForm = {
  login: string;
  password: string;
};
export const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });

  const login = (data: LoginForm) => {
    setIsLoading(true);
    AppApi.login(data)
      .then(() => {
        closeModal();
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 400) {
          setErrorMessage("Неверный логин или пароль");
          setError("login", {});
          setError("password", {});
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <LoginModalStyled ref={modalRef} $isLoading={isLoading}>
        <button
          className="close-button"
          aria-label="Закрыть модальное окно"
          onClick={closeModal}
        >
          &#x2715;
        </button>

        <div className="loader">
          <Loader />
        </div>
        <LoginFormStyled onSubmit={handleSubmit(login)}>
          <label htmlFor="login">Логин</label>

          <Input
            id="login"
            placeholder="Login"
            className={errors.login ? "error" : ""}
            {...register("login", {
              required: true,
              /*На всякий отмечу, что в ТЗ не был указан какой-либо паттерн регулярки*/
              pattern: {
                message: "Недопустимые символы: $%^&*()_",
                value: /^[^%^&*()]+$/,
              },
            })}
          />
          <span className="error-message">{errors.login?.message}</span>
          <label htmlFor="password">Пароль</label>
          <Input
            id="password"
            placeholder="Password"
            className={errors.password ? "error" : ""}
            {...register("password", { required: true })}
          />
          <Button>Войти</Button>
          {errorMessage && (
            <span className="error-message">{errorMessage}</span>
          )}
        </LoginFormStyled>
      </LoginModalStyled>
      <Button onClick={openModal}>Вход</Button>
    </>
  );
};
