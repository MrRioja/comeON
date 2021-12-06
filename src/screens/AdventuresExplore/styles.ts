import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CategoryCount = styled.Text`
  width: 100%;
  margin: 10px 0;
  padding-left: 24px;
`;

export const PlaceContainer = styled.View`
  width: 250px;
  height: 220px;
  margin: 0 15px 20px 0;
`;

export const PlaceImage = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 20 },
})`
  flex: 1;
  justify-content: flex-end;
`;

export const Bookmark = styled(RectButton)`
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const RatingContainer = styled.View`
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

export const AverageRating = styled.Text`
  margin-left: 5px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const PlaceName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
