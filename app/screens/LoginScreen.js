import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import Constants from "expo-constants";

import Screen from "./Screen";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
      />
      <AppButton
        style={styles.button}
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    width: 110,
    height: 110,
  },
  screen: {
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
});

export default LoginScreen;
