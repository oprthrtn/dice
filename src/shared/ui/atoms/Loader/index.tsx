import styled, { css } from "styled-components";

export const Loader = styled.div`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ theme: { colors } }) => {
    return css`
      border: 0.4rem solid ${colors.white};
      border-bottom-color: ${colors.purple_dark};
    `;
  }}
`;
