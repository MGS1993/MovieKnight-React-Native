import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../Components/Feed";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* change HomeScreen to Feed and see if we can get the inital load 
    to have  hook state so that we can access the loading boolean. This will
    alow us to set a loading indicator anytime Feed needs it. */}
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
