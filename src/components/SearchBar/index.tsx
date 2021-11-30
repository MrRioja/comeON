import React from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Container, SearchBarInput } from "./styles";

import theme from "../../styles/theme";

export function SearchBar({ ...rest }: TextInputProps) {
  return (
    <Container>
      <Feather name="search" size={24} color={theme.colors.text_secondary} />

      <SearchBarInput {...rest} />
    </Container>
  );
}
