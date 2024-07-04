import { ComponentProps, forwardRef } from "react";
import { ButtonStyled } from "./styled";

export type { ButtonProps } from "./types";

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof ButtonStyled>
>((props, ref) => {
  return <ButtonStyled ref={ref} {...props} />;
});
