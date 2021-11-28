import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Sights } from "../screens/Sights";
import { Tours } from "../screens/Tours";
import { Adventures } from "../screens/Adventures";

import theme from "../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialTopTabNavigator();

export function FavoritesTabs() {
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
      }}
    >
      <Tab.Screen name="Sights" component={Sights} />

      <Tab.Screen name="Tours" component={Tours} />

      <Tab.Screen name="Adventures" component={Adventures} />
    </Tab.Navigator>
  );
}
