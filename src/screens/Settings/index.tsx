import React from "react";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import theme from "../../styles/theme";
import { Button } from "../../components/Button";
import { SettingsOption } from "../../components/SettingsOption";

import {
  Title,
  Header,
  ProfileContainer,
  ImageProfile,
  Username,
  UserLocation,
  UserLocationContainer,
  OptionsContainer,
  OptionsHeader,
  OptionDash,
  OptionsTitle,
} from "./styles";

export function Settings() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const imageProfileStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 200], [1, 0], Extrapolate.CLAMP),
    };
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 80], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(
            scrollY.value,
            [0, 40],
            [0, 105],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={[{ backgroundColor: theme.colors.background, flex: 1 }]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />

      <Animated.View style={headerStyleAnimation}>
        <Header>
          <Title>Settings</Title>

          <Button name="log-out" color={theme.colors.logout} />
        </Header>
      </Animated.View>

      <ProfileContainer>
        <Animated.View style={imageProfileStyleAnimation}>
          <ImageProfile
            source={{
              uri: "https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }}
          />
        </Animated.View>
        <Username>Edmund Wernher</Username>

        <UserLocationContainer>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={theme.colors.main}
          />
          <UserLocation>Berlin, Germany</UserLocation>
        </UserLocationContainer>
      </ProfileContainer>

      <OptionsContainer>
        <OptionsHeader>
          <OptionDash />
          <OptionsTitle>General</OptionsTitle>
        </OptionsHeader>

        <SettingsOption iconName="file" optionDescription="My tickets" />

        <SettingsOption iconName="user" optionDescription="Profile settings" />

        <SettingsOption iconName="credit-card" optionDescription="Payment" />

        <SettingsOption iconName="bell" optionDescription="Notifications" />
      </OptionsContainer>
    </Animated.ScrollView>
  );
}
