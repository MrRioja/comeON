import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;
