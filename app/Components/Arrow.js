import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Arrow({ onPress, isOpen }) {
  if (isOpen)
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name="arrow-up-bold"
          size={24}
          color={colors.accent}
        />
      </TouchableWithoutFeedback>
    );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-down-bold"
        size={24}
        color={colors.accent}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Arrow;
