import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { SightsExplore } from "../screens/SightsExplore";
import { ToursExplore } from "../screens/ToursExplore";
import { AdventuresExplore } from "../screens/AdventuresExplore";

import theme from "../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialTopTabNavigator();

export function ExploreTabs() {
  const w = Dimensions.get("window").width;
  const dotSize = 7;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarPressColor: theme.colors.background,
        tabBarInactiveTintColor: theme.colors.text_primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: RFValue(15),
          textTransform: "capitalize",
          fontFamily: theme.fonts.primary_400,
        },
        tabBarIndicatorStyle: {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          left: (w / 3 - dotSize) / 2,
          marginBottom: 5,
        },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Sights" component={SightsExplore} />

      <Tab.Screen name="Tours" component={ToursExplore} />

      <Tab.Screen name="Adventures" component={AdventuresExplore} />
    </Tab.Navigator>
  );
}
