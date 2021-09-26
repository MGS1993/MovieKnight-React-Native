import React from "react";
import { View, StyleSheet, Text } from "react-native";
import formatDistance from "date-fns/formatDistance";

import colors from "../../config/colors";

function TrackerInfo({ title, nextEp }) {
  let nextFormatted;
  if (nextEp !== undefined)
    nextFormatted = formatDistance(Date.now(), new Date(nextEp));

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <Text style={[styles.text, styles.nextEp]}>
        {" "}
        {nextEp === undefined
          ? `Next Episode: TBA`
          : `Next Episode: ${nextFormatted}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
  nextEp: {},
});

export default TrackerInfo;
