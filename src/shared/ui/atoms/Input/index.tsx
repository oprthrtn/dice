import { ComponentProps, forwardRef } from "react";
import { InputStyled } from "./styled";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof InputStyled>
>((props, ref) => {
  return <InputStyled ref={ref} {...props} />;
});
