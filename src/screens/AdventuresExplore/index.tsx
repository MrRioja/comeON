import React from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  CategoryCount,
  PlaceContainer,
  PlaceImage,
  Bookmark,
  PlaceName,
  RatingContainer,
  AverageRating,
} from "./styles";

import theme from "../../styles/theme";

const places = [
  {
    id: "1",
    uri: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Mountain climbing",
    rating: 5,
    numEvaluations: 150,
  },
  {
    id: "2",
    uri: "https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Montain bike",
    rating: 3,
    numEvaluations: 150,
  },
  {
    id: "3",
    uri: "https://images.pexels.com/photos/8099244/pexels-photo-8099244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Balloon ride - Boituva",
    rating: 4,
    numEvaluations: 150,
  },
  {
    id: "4",
    uri: "https://images.pexels.com/photos/1790184/pexels-photo-1790184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Stand up paddle",
    rating: 4,
    numEvaluations: 150,
  },
];

export function AdventuresExplore() {
  return (
    <Container>
      <CategoryCount>{places.length} Adventures</CategoryCount>

      <FlatList
        horizontal
        data={places}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaceContainer>
            <PlaceImage source={{ uri: item.uri }} resizeMode="cover">
              <Bookmark>
                <MaterialCommunityIcons
                  name="heart"
                  size={24}
                  color={theme.colors.main}
                />
              </Bookmark>

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
