import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../Components/Feed";
import SearchBTns from "../screens/SearchBtns";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchBtns" component={SearchBTns} />
    <Stack.Screen name="TrendingMovies" component={Feed} />
    {/* <Stack.Screen name="TrendingTv" component={Feed} /> */}
  </Stack.Navigator>
);

export default SearchNavigator;
