import React from "react";
import { KeyboardAvoidingView, View } from "react-native";

import { Container, Header, Title } from "./styles";
import theme from "../../styles/theme";

import { Button } from "../../components/Button";
import { SearchBar } from "../../components/SearchBar";
import { PopularPlaces } from "../../components/PopularPlaces";
import { ForYouPlaces } from "../../components/ForYouPlaces";

export function Search() {
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }} enabled>
      <Container>
        <Header>
          <Title>Search</Title>

          <Button name="filter" color={theme.colors.text_primary} />
        </Header>

        <View style={{ paddingHorizontal: 24, marginBottom: 15 }}>
          <SearchBar
            placeholder="Where do you want to go?"
            placeholderTextColor={theme.colors.text_secondary}
            selectionColor={theme.colors.text_secondary}
          />
        </View>

        <ForYouPlaces />

        <PopularPlaces />
      </Container>
    </KeyboardAvoidingView>
  );
}
