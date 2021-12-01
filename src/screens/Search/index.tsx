import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container, Header, Title } from "./styles";
import theme from "../../styles/theme";

import { Button } from "../../components/Button";
import { SearchBar } from "../../components/SearchBar";
import { PopularPlaces } from "../../components/PopularPlaces";

export function Search() {
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Search</Title>

            <Button name="filter" color={theme.colors.text_primary} />
          </Header>

          <SearchBar
            placeholder="Where do you want to go?"
            placeholderTextColor={theme.colors.text_secondary}
            selectionColor={theme.colors.text_secondary}
          />

          <PopularPlaces />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
