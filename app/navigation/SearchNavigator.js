import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import constants from "expo-constants";
import Feed from "../Components/Feed";
import MediaDetails from "../screens/MediaDetails";
import TopSearch from "../screens/TopSearch";
import SearchBTns from "../screens/SearchHub";
import SearchScreen from "../screens/SearchScreen";

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
      name="SearchScreen"
      component={SearchScreen}
      options={{ title: "Advanced Search" }}
    />
    <Stack.Screen
      name="FilteredSearch"
      component={Feed}
      options={{ title: "Filtered Search" }}
    />
    <Stack.Screen
      name="MediaDetails"
      component={MediaDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchResults"
      component={Feed}
      options={{ title: "Multi Search" }}
    />
  </Stack.Navigator>
);

export default SearchNavigator;
