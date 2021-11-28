import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Muli_700Bold,
  Muli_300Light,
  Muli_400Regular,
} from "@expo-google-fonts/muli";

import { Routes } from "./src/routes";
import theme from "./src/styles/theme";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Muli_700Bold,
    Muli_300Light,
    Muli_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <Routes />
    </ThemeProvider>
  );
}
