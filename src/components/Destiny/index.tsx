import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Bookmark,
  DestinyImageContainer,
  DestinyImage,
  DestinyContainer,
  DestinyInfo,
  DestinyName,
  Period,
} from "./styles";

import theme from "../../styles/theme";

interface Props {
  uri: string;
  destinyName: string;
  destinyPeriod: string;
}

export function Destiny({ uri, destinyName, destinyPeriod }: Props) {
  return (
    <Container>
      <DestinyImageContainer>
        <DestinyImage
          source={{
            uri,
          }}
          style={{ resizeMode: "cover" }}
        />

        <Bookmark>
          <MaterialCommunityIcons
            name="heart"
            size={24}
            color={theme.colors.main}
          />
        </Bookmark>
      </DestinyImageContainer>

      <DestinyContainer>
        <DestinyInfo>
          <DestinyName>{destinyName}</DestinyName>
          <Period>{destinyPeriod}</Period>
        </DestinyInfo>

        <Feather
          name="chevron-right"
          size={24}
          color={theme.colors.text_secondary}
        />
      </DestinyContainer>
    </Container>
  );
}
