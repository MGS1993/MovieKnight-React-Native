import React from "react";
import {
  Animated,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../../config/colors";

function ProviderIcon({ animStyle, data, title, icon, onPress }) {
  if (data === undefined) return null;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Animated.View style={[styles.iconContainer, animStyle]}>
          {icon}
        </Animated.View>
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
