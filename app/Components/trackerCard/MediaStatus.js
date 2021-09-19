import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function MediaStatus({ status }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: colors.safe,
    alignSelf: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    backgroundColor: colors.danger,
  },
});

export default MediaStatus;
