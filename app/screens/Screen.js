import React from "react";
import { Animated, SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    //styles array makes multiple styles possible
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.mainBG,
    top: 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
