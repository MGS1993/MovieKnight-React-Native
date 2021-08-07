import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function CardInfo({ title, overView, voteAverage }) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.voteWrapper}>
          <MaterialCommunityIcons
            name="star-outline"
            color={colors.accent}
            size={20}
          />
          <Text style={styles.voteAverage}>{voteAverage}</Text>
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <Text numberOfLines={5} style={styles.overView}>
          {overView}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomWrapper: {
    // flex: 3,
  },
  detailsContainer: {
    alignItems: "center",
    flexDirection: "column",
    flex: 4,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  topWrapper: {
    // flex: 1,
  },
  overView: {
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
  },
  voteAverage: {
    alignSelf: "center",
    color: colors.accent,
    fontSize: 18,
    paddingLeft: 4,
  },
  voteWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default CardInfo;
