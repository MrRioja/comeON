import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabRoutes } from "./app.tab.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string;
      Search: string;
      Favorites: string;
      Settings: string;
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  );
}
