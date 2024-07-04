import styled from "styled-components";

export const AppHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 2rem;

  .content {
    display: flex;
    gap: 0.5rem;
  }

  h1 {
    font-weight: 700;
    font-size: 1rem;
  }
`;
