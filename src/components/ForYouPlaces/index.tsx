import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";

import {
  Container,
  Header,
  Title,
  SeeAllContainer,
  SeeAllText,
  PlaceContainer,
  PlaceImage,
  CityContainer,
  PlaceName,
  City,
} from "./styles";
import theme from "../../styles/theme";

const places = [
  {
    id: "1",
    uri: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "French Polynesia",
    city: "Edinburgh",
  },
  {
    id: "2",
    uri: "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Dubai",
    city: "Paris",
  },
  {
    id: "3",
    uri: "https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Montain bike",
    city: "Londres",
  },
];

export function ForYouPlaces() {
  return (
    <Container>
      <Header>
        <Title>For You</Title>

        <SeeAllContainer>
          <SeeAllText>See all</SeeAllText>
        </SeeAllContainer>
      </Header>

      <FlatList
        horizontal
        data={places}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaceContainer>
            <PlaceImage source={{ uri: item.uri }} resizeMode="cover" />

            <PlaceName>{item.destinyName}</PlaceName>

            <CityContainer>
              <MaterialCommunityIcons
                name="map-marker"
                size={18}
                color={theme.colors.main}
              />
              <City>{item.city}</City>
            </CityContainer>
          </PlaceContainer>
        )}
        contentContainerStyle={{ paddingLeft: 24, paddingRight: 9 }}
      />
    </Container>
  );
}
