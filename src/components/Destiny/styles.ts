import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 20px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
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

export const DestinyImageContainer = styled.View`
  width: 100%;
  height: 70%;
  margin-bottom: 5px;
  border-radius: 15px;
`;

export const DestinyImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const DestinyContainer = styled(RectButton)`
  width: 100%;
  height: 30%;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const DestinyInfo = styled.View``;

export const DestinyName = styled.Text`
  margin-bottom: 3px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Period = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
