import React from "react";
import { Feather } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color: string;
  name: React.ComponentProps<typeof Feather>["name"];
}

export function Button({ name, color }: Props) {
  return (
    <Container>
      <Feather name={name} color={color} size={24} />
    </Container>
  );
}
