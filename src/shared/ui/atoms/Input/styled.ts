import styled from "styled-components";
import { InputProps } from "./types";

export const InputStyled = styled.input<InputProps>`
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
  background-color: white;

  &:focus {
    outline: solid #3893ff;
  }

  &:disabled {
    opacity: 50%;
  }

  &.error {
    outline: solid red;
  }
`;
