import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import constants from "expo-constants";
import Feed from "../Components/Feed";
import SearchAdvanced from "../screens/SearchAdvanced";
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
    <Stack.Screen
      name="TopMovies"
      component={SearchAdvanced}
      options={{ title: "Top Movies" }}
    />
    <Stack.Screen
      name="TopTv"
      component={SearchAdvanced}
      options={{ title: "Top Tv" }}
    />
    <Stack.Screen
      name="TopMovieByGenre"
      component={Feed}
      options={{ title: "Popular by Genre" }}
    />
  </Stack.Navigator>
);

export default SearchNavigator;
