import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(75)}px;
  margin-top: ${RFValue(25)}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(35)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
