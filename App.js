import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/Components/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
