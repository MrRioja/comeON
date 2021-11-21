import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";

interface IProps {
  size: number;
  color: string;
  focused: boolean;
  name: React.ComponentProps<typeof Feather>["name"];
}

export function TabBarIcon({ color, name, size, focused }: IProps) {
  return (
    <Container focused={focused}>
      <Feather color={color} size={size} name={name} />
    </Container>
  );
}
