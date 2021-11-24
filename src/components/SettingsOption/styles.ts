import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
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
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
