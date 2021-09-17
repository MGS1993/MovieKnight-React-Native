import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import TrackListScreen from "../screens/TrackListScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen name="TrackedList" component={TrackListScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
