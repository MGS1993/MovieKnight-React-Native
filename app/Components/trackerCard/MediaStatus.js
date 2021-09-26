import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function MediaStatus({ status }) {
  const backgroundStyle = {
    backgroundColor: status !== "Ended" ? colors.safe : colors.danger,
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, backgroundStyle]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    textAlign: "center",
    // backgroundColor: colors.safe,
  },
  text: {
    borderRadius: 5,
    color: colors.white,
    fontWeight: "bold",
    padding: 3,
  },
});

export default MediaStatus;
