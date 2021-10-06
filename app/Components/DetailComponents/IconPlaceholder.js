import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function IconPlaceholder() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="plus-thick" color="white" size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    height: 65,
    justifyContent: "center",
    width: 65,
  },
});

export default IconPlaceholder;
