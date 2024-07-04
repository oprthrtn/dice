import {
  buttonActiveStyles,
  buttonTypeStyles,
} from "shared/ui/atoms/Button/styled";
import styled, { css } from "styled-components";

export const RadioInputWrapperStyled = styled.div`
  display: contents;

  input {
    display: none;
  }

  ${({ theme: { colors } }) => {
    return css`
      input:checked + label {
        background-color: ${colors.orange};
      }

      label {
        ${buttonTypeStyles["default"]}
      }
    `;
  }}
`;

export const FormStyled = styled.form`
  fieldset {
    all: unset;
  }
  fieldset,
  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  & button[variant="submit"] {
    margin-top: 0.625rem;
  }

  .bet-type-label {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    & > :first-child {
      grid-area: 1 / 1 / 1 / 3;
    }

    & > :last-child {
      grid-area: 4 / 1 / 4 / 3;
    }
  }
`;

export const SpecificNumberStyled = styled.div<{ $active?: boolean }>`
  ${({ $active }) => {
    const defaultStyles = css`
      display: flex;
      justify-content: space-between;

      position: relative;

      label {
        &::after {
          content: "";
          position: absolute;
          inset: 0;
        }
      }

      input {
        border-radius: 0.3rem;
        border: 0;
      }
    `;

    const checkedStyles = $active && buttonActiveStyles["default"];
    return [defaultStyles, buttonTypeStyles["default"], checkedStyles];
  }}
`;
