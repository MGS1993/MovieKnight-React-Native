import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
function ErrorNotice(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genre Conflict Detected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.danger,
    height: 35,
    justifyContent: "center",
    elevation: 1,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default ErrorNotice;
