import styled, { RuleSet, css } from "styled-components";
import { ButtonProps, ButtonType } from "./types";

const defaultStyles = css`
  ${({ theme: { colors } }) => {
    return `
      color: ${colors.white};
      cursor: pointer;
      border-radius: 0.3rem;
      padding: 0.625rem 1rem;
      border-width: 0 0 1px 0;
      text-align: center;
    `;
  }}
`;

export const buttonTypeStyles: {
  [k in `${ButtonType}`]: RuleSet;
} = {
  [ButtonType.default]: css`
    ${({ theme: { colors } }) => {
      return css`
        ${defaultStyles}
        background-color: ${colors.purple_dark};

        &:hover:enabled {
          background-color: ${colors.purple_light};
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.3;
        }
      `;
    }}
  `,
  [ButtonType.submit]: css`
    ${({ theme: { colors } }) => {
      return css`
        ${defaultStyles}
        background-color: ${colors.green_dark};

        &:hover:enabled {
          background-color: ${colors.green_light};
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.3;
        }
      `;
    }}
  `,
};
export const buttonActiveStyles: {
  [k in `${ButtonType}`]: RuleSet;
} = {
  [ButtonType.default]: css`
    ${({ theme: { colors } }) => {
      return css`
        background-color: ${colors.orange};

        &:hover:enabled {
          background-color: ${colors.orange};
        }
      `;
    }}
  `,
  [ButtonType.submit]: css`
    ${() => {
      return css``;
    }}
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ variant = "default", active }) => {
    const activeStyles = active && buttonActiveStyles[variant];
    return [buttonTypeStyles[variant], activeStyles];
  }}
`;
