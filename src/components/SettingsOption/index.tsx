import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";

import { Container, IconContainer, Option, OptionTitle } from "./styles";
import theme from "../../styles/theme";

interface IProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  optionDescription: string;
}

export function SettingsOption({ iconName, optionDescription }: IProps) {
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} color={theme.colors.main} size={24} />
      </IconContainer>

      <Option>
        <OptionTitle>{optionDescription}</OptionTitle>

        <Feather
          name="chevron-right"
          color={theme.colors.text_secondary}
          size={24}
        />
      </Option>
    </Container>
  );
}
