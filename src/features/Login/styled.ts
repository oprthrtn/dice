import { Modal } from "shared/ui";
import styled, { css } from "styled-components";

export const LoginModalStyled = styled(Modal)<{ $isLoading?: boolean }>`
  ${({ theme: { colors }, $isLoading }) => {
    const isLoading =
      $isLoading &&
      css`
        .loader {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `;
    return [
      css`
        color: ${colors.white};
        background-color: #250e36;
        border-color: ${colors.purple_light};
        border-radius: 0.5rem;
        position: relative;

        max-width: 400px;
        width: 100%;
        padding: 3rem;

        &[open] {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            display: none;
          }

          100% {
            opacity: 1;
            display: block;
          }
        }

        &::backdrop {
          background: #00000080;
        }

        .close-button {
          color: white;
          cursor: pointer;
          background-color: unset;
          border: unset;

          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
        }

        .loader {
          display: none;
        }
      `,
      isLoading,
    ];
  }}
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: none;
  }

  .error-message {
    font-size: 0.875rem;
    color: red;
  }
`;
