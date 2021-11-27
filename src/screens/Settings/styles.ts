import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(75)}px;
  padding: 0px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(30)}px;
  margin-top: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(35)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const ProfileContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${RFValue(30)}px;
`;

export const ImageProfile = styled.Image`
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
  border-radius: 30px;
`;

export const Username = styled.Text`
  margin-bottom: 10px;
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const UserLocationContainer = styled.View`
  padding: 10px 15px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const UserLocation = styled.Text`
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const OptionsContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  margin-bottom: 100px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OptionsHeader = styled.View`
  padding: 0 24px;
  margin-bottom: 10px;
`;

export const OptionDash = styled.View`
  width: 40px;
  height: 5px;
  border-radius: 2.5px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.text_secondary};
`;

export const OptionsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
