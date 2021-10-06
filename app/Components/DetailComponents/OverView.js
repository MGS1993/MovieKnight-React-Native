import React from "react";
import { Animated, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import MediaStatus from "../trackerCard/MediaStatus";

function OverView({ animationStyle, overview, status }) {
  return (
    <Animated.View style={[styles.container, animationStyle]}>
      <MediaStatus status={status} />
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
    marginVertical: 5,
    textAlign: "center",
  },
});

export default OverView;
