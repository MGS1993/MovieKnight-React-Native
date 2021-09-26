import React from "react";
import { View, StyleSheet, Text } from "react-native";

function TextAlert({ children, textStyle }) {
  return (
    <View style={styles.container}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TextAlert;
