import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function OverView({ overview }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBG,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 15,
  },
  text: {
    color: colors.white,
    marginVertical: 20,
    textAlign: "center",
  },
});

export default OverView;
