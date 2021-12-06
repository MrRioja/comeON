import React from "react";
import { Button } from "../../components/Button";

import { PopularPlaces } from "../../components/PopularPlaces";
import { ExploreTabs } from "../../routes/app.topTabExplore.routes";
import theme from "../../styles/theme";

import { Container, Header, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <Title>Explore</Title>

        <Button name="filter" color={theme.colors.text_primary} />
      </Header>

      <ExploreTabs />

      <PopularPlaces />
    </Container>
  );
}
