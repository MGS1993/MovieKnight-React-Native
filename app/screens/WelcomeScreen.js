import React from "react";
import { Image, ImageBackground, View, StyleSheet } from "react-native";

import AppButton from "../Components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          bgColor={colors.accent}
          title="Log In"
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
        />
        <AppButton
          bgColor={colors.accent}
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
        />
        {/* <AppButton title="Continue as Guest" top={15} /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: "30%",
    width: "100%",
  },
  logo: {
    height: 250,
    width: 250,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
});

export default WelcomeScreen;
