import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import Constants from "expo-constants";

import Screen from "./Screen";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <AppButton
              style={styles.button}
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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
