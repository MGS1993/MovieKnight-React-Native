import React from "react";
import { Animated, View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function OverView({ animationStyle, overview }) {
  return (
    <Animated.View style={[styles.container, animationStyle]}>
      <Text style={styles.text}>{overview}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBG,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: {
    color: colors.white,
    marginVertical: 20,
    textAlign: "center",
  },
});

export default OverView;
