import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import SearchScreen from "./app/screens/SearchScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SearchAdvanced from "./app/screens/SearchAdvanced";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
