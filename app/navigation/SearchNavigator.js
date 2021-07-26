import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import constants from "expo-constants";
import Feed from "../Components/Feed";
import SearchBTns from "../screens/SearchBtns";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerStatusBarHeight: constants.statusBarHeight,
    }}
  >
    <Stack.Screen
      name="SearchBtns"
      component={SearchBTns}
      options={{ title: "Search Navigator" }}
    />
    <Stack.Screen
      name="TrendingMovies"
      component={Feed}
      options={{ title: "Trending Movies" }}
    />
    <Stack.Screen
      name="TrendingTv"
      component={Feed}
      options={{ title: "Trending TV Shows" }}
    />
  </Stack.Navigator>
);

export default SearchNavigator;
