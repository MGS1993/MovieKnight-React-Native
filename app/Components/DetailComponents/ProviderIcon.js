import React from "react";
import { View, StyleSheet } from "react-native";

function ProviderIcon({ streamProviders }) {
  let providers;
  console.log(streamProviders);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 65,
    backgroundColor: "green",
  },
});

export default ProviderIcon;
