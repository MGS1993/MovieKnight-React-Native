import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children, style }) {
  return (
    //styles array makes multiple styles possible
    <SafeAreaView styles={[styles.screen, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
