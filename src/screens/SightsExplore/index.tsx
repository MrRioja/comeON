import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";

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
    uri: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Machu Picchu",
    rating: 4,
    numEvaluations: 150,
  },
  {
    id: "2",
    uri: "https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Victoria Falls",
    rating: 5,
    numEvaluations: 200,
  },
  {
    id: "3",
    uri: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    destinyName: "Maldives",
    rating: 4,
    numEvaluations: 250,
  },
  {
    id: "4",
    uri: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    destinyName: "Vaitāpē",
    rating: 5,
    numEvaluations: 300,
  },
  {
    id: "5",
    uri: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    destinyName: "Canada",
    rating: 5,
    numEvaluations: 300,
  },
];

export function SightsExplore() {
  return (
    <Container>
      <CategoryCount>{places.length} Sights</CategoryCount>

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
