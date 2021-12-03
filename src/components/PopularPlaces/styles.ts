import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
`;

export const Title = styled.Text`
  margin-bottom: 15px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const PlaceContainer = styled.View`
  width: 100%;
  height: 80px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  border-radius: 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PlaceImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 25px;
  border-radius: 10px;
`;

export const PlaceDetails = styled.View``;

export const PlaceName = styled.Text`
  margin-bottom: 5px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const PlacePeriod = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
