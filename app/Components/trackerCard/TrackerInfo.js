import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import colors from "../../config/colors";
import trackApi from "../../Util/trackApi";

function TrackerInfo({ title, nextEp }) {
  let nextFormatted;
  if (nextEp !== undefined)
    nextFormatted = formatDistanceToNow(Date.parse(nextEp));
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <Text style={[styles.text, styles.nextEp]}>
        {" "}
        {nextEp === undefined
          ? `Next Episode: TBA`
          : `Next Episode: ${nextFormatted}`}
      </Text>
      <Button title="test" onPress={trackApi.cancelAllNotifications} />
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
