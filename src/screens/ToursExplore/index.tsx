import React from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  CategoryCount,
  PlaceContainer,
  PlaceImage,
  PlaceName,
  RatingContainer,
  AverageRating,
} from "./styles";

const places = [
  {
    id: "1",
    uri: "https://images.pexels.com/photos/1581693/pexels-photo-1581693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Palace At Winchester",
    rating: 3,
    numEvaluations: 150,
  },
  {
    id: "2",
    uri: "https://images.pexels.com/photos/8430474/pexels-photo-8430474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Eiffel Tower",
    rating: 4,
    numEvaluations: 150,
  },
  {
    id: "3",
    uri: "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Dubai",
    rating: 5,
    numEvaluations: 150,
  },
  {
    id: "4",
    uri: "https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Egypt",
    rating: 5,
    numEvaluations: 150,
  },
];

export function ToursExplore() {
  return (
    <Container>
      <CategoryCount>{places.length} Tours</CategoryCount>

      <FlatList
        horizontal
        data={places}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaceContainer>
            <PlaceImage source={{ uri: item.uri }} resizeMode="cover">
              <LinearGradient
                colors={["transparent", "rgba(0,0,0, 0.7)", "#000"]}
                style={{
                  width: "100%",
                  paddingBottom: 20,
                  paddingTop: 10,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  paddingHorizontal: 20,
                }}
              >
                <RatingContainer>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <MaterialCommunityIcons
                      name="star"
                      color="yellow"
                      key={index}
                      size={15}
                    />
                  ))}
                  <AverageRating>{item.rating}</AverageRating>
                </RatingContainer>

                <PlaceName>{item.destinyName}</PlaceName>
              </LinearGradient>
            </PlaceImage>
          </PlaceContainer>
        )}
        contentContainerStyle={{ paddingLeft: 24, paddingRight: 9 }}
      />
    </Container>
  );
}
