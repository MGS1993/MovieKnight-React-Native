import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function CardInfo({ title, overView, voteAverage }) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.voteAverage}>{voteAverage}</Text>
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
  },
});

export default CardInfo;
