import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  padding: 20px 0;
  align-items: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main_light};
`;

export const Option = styled.View`
  width: 80%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.types_filter};
`;

export const OptionTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
