import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  Title,
  PlaceContainer,
  PlaceImage,
  PlaceDetails,
  PlaceName,
  PlacePeriod,
} from "./styles";

const places = [
  {
    id: "1",
    uri: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Vaitāpē, French Polynesia",
    destinyPeriod: "15 Mar - 19 Mar 2021",
  },
  {
    id: "2",
    uri: "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Dubai, United Arab Emirates",
    destinyPeriod: "21 Jan - 25 Dec 2021",
  },
  {
    id: "3",
    uri: "https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Montain bike",
    destinyPeriod: "01 Nov - 12 Nov 2021",
  },
];

export function PopularPlaces() {
  return (
    <Container>
      <Title>Popular</Title>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaceContainer>
            <PlaceImage source={{ uri: item.uri }} resizeMode="cover" />

            <PlaceDetails>
              <PlaceName>{item.destinyName}</PlaceName>
              <PlacePeriod>{item.destinyPeriod}</PlacePeriod>
            </PlaceDetails>
          </PlaceContainer>
        )}
      />
    </Container>
  );
}
