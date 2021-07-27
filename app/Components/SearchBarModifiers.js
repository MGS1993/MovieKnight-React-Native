import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function SearchBarModifiers({ active = false, onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 35,
    height: 40,
    justifyContent: "center",
    width: 70,
  },
  text: {
    color: colors.white,
  },
});

export default SearchBarModifiers;
