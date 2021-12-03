import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  flex-direction: row;
  border-radius: 25px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchBarInput = styled.TextInput`
  width: 100%;
  margin-left: 10px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
