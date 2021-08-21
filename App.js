import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/Components/OfflineNotice";

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
