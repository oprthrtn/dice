import styled, { css } from "styled-components";
import RcSelect from "rc-select";
export const RcSelectStyled = styled(RcSelect)`
  ${({ theme: { colors } }) => {
    return css`
      background-color: ${colors.white};
      width: 100%;
      border-radius: 0.375rem;
      color: ${colors.black};

      .rc-select-selection-item,
      input {
        padding: 0.5rem 0.75rem;
      }
    `;
  }}
`;

export const RcSelectDropdownStyled = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      color: ${colors.black};
    `;
  }}
`;
