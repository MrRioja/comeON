import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import theme from "../../styles/theme";
import { Button } from "../../components/Button";

import {
  Container,
  Title,
  Header,
  ProfileContainer,
  ImageProfile,
  Username,
  UserLocation,
  UserLocationContainer,
} from "./styles";

export function Settings() {
  return (
    <Container>
      <Header>
        <Title>Settings</Title>

        <Button name="log-out" color={theme.colors.logout} />
      </Header>

      <ProfileContainer>
        <ImageProfile
          source={{
            uri: "https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
        <Username>Edmund Wernher</Username>

        <UserLocationContainer>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={theme.colors.main}
          />
          <UserLocation>Berlin, Germany</UserLocation>
        </UserLocationContainer>
      </ProfileContainer>
    </Container>
  );
}
