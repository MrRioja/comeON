import React from "react";

import { Container, Header, Title } from "./styles";
import theme from "../../styles/theme";

import { Button } from "../../components/Button";
import { SearchBar } from "../../components/SearchBar";

export function Search() {
  return (
    <Container>
      <Header>
        <Title>Search</Title>

        <Button name="filter" color={theme.colors.text_primary} />
      </Header>

      <SearchBar placeholder="Where do you want to go?" />
    </Container>
  );
}
