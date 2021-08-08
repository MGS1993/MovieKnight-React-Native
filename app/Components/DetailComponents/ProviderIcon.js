import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import arrayManipulate from "../../Util/arrayManipulate";
import colors from "../../config/colors";
import IconPlaceholder from "./IconPlaceholder";

function ProviderIcon({ data, title }) {
  if (data === undefined) return null;
  const [icon, setIcon] = useState(<IconPlaceholder />);

  // console.log(title, data);

  const expandIcons = (data) => {
    let arr = arrayManipulate.reduceArrLen(data, 6);
    arrayManipulate.buildIconArray(arr);
    let icons = arrayManipulate.buildIconArray(arr);

    setIcon(icons);
  };

  return (
    <TouchableWithoutFeedback onPress={() => expandIcons(data)}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.iconContainer}>{icon}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 230,
  },
  mainContainer: {
    alignItems: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProviderIcon;
