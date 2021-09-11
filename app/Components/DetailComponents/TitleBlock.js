import React from "react";
import { Animated, View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function TitleBlock({ runTime, title, yearReleased, animationStyle }) {
  let yearReleasedV2 = yearReleased?.slice(0, 4);

  return (
    <Animated.View style={[styles.container, animationStyle]}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.miscInfoWrapper}>
        <Text style={styles.yearReleased}>{yearReleasedV2}</Text>
        {yearReleased && runTime ? (
          <Text style={styles.interPunct}>·</Text>
        ) : null}
        <Text style={styles.runTime}>{runTime}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  interPunct: {
    color: colors.accent,
    fontSize: 24,
    marginHorizontal: 5,
  },
  runTime: {
    color: colors.accent,
    fontSize: 18,
  },
  miscInfoWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  yearReleased: {
    color: colors.accent,
    fontSize: 18,
  },
});

export default TitleBlock;
