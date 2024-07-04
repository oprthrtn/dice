import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

    html,body,#root{
        height: 100%;
    }

    body{
      font-family: "Inter", sans-serif;
        margin: 0;
        ${({ theme: { colors } }) => {
          return css`
            color: ${colors.white};
            background: linear-gradient(
              90deg,
              #0c0b1e 0%,
              #2a0f3b 50%,
              #0c0b1e 100%
            );
          `;
        }}

      

    }

    #root{
      display: flex;
      flex-direction: column;

      & > main{
        flex-grow:1;
      }
    }
`;
