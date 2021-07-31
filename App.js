import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/Components/OfflineNotice";
import SearchScreen from "./app/screens/SearchScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SearchAdvanced from "./app/screens/SearchAdvanced";

export default function App() {
  // const netInfo = useNetInfo();
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
