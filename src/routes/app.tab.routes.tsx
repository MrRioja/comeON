import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";

import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Settings } from "../screens/Settings";
import { Favorites } from "../screens/Favorites";
import { TabBarIcon } from "../components/TabBarIcon";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.text_primary,
        tabBarStyle: {
          height: 80,
          position: "absolute",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.white,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} size={24} focused={focused} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="search"
              color={color}
              size={24}
              focused={focused}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="heart"
              color={color}
              size={24}
              focused={focused}
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="settings"
              color={color}
              size={24}
              focused={focused}
            />
          ),
        }}
      />
    </Navigator>
  );
}
