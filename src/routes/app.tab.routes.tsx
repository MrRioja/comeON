import React from "react";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";

import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Settings } from "../screens/Settings";
import { Favorites } from "../screens/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_primary,
        tabBarStyle: {
          height: 90,
          position: "absolute",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: theme.colors.white,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
