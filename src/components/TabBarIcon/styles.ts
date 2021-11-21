import styled, { css } from "styled-components/native";

interface Props {
  focused: boolean;
}

export const Container = styled.View<Props>`
  ${({ focused, theme }) =>
    focused &&
    css`
      width: 50px;
      height: 50px;
      border-radius: 25px;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.main};
    `}
`;
