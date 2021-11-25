import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 75px;
  padding: 0px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(50)}px;
  margin-top: ${getStatusBarHeight() + 15}px;
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

export const OptionsContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;
