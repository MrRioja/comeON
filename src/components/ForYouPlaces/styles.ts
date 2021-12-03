import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0px 24px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const SeeAllContainer = styled(RectButton).attrs({
  rippleColor: theme.colors.background,
})``;

export const SeeAllText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const PlaceContainer = styled.View`
  width: 150px;
  height: 200px;
  margin: 20px 15px 20px 0;
`;

export const PlaceImage = styled.Image`
  width: 100%;
  height: 70%;
  margin-bottom: 5px;
  border-radius: 20px;
`;

export const CityContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const PlaceName = styled.Text`
  margin-bottom: 5px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const City = styled.Text`
  margin-left: 5px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
