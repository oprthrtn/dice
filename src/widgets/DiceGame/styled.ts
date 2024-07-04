import styled, { css } from "styled-components";

export const DiceGameWrapperStyled = styled.div<{ $disabled: boolean }>`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  max-width: 340px;
  width: 100%;
  justify-items: stretch;
  gap: 2rem;

  .header {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    b {
      font-size: 1.25rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .dice-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ $disabled }) => {
    const disabledStyles =
      $disabled &&
      css`
        & > :not(.header) {
          filter: opacity(0.5);
          pointer-events: none;
        }
      `;

    return [disabledStyles];
  }}
`;
