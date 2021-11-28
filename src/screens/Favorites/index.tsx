import React from "react";
import { Button } from "../../components/Button";
import theme from "../../styles/theme";

import { FavoritesTabs } from "../../routes/app.topTab.routes";

import { Container, Header, Title } from "./styles";

export function Favorites() {
  return (
    <Container>
      <Header>
        <Title>Favorites</Title>

        <Button name="search" color={theme.colors.text_primary} />
      </Header>

      <FavoritesTabs />
    </Container>
  );
}
