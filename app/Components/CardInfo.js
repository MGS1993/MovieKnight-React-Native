import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function CardInfo({ title, overView, voteAverage }) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.voteAverage}>{voteAverage}</Text>
      <View>
        <Text style={styles.overView}>{overView}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
    flexDirection: "column",
    flex: 4,
    justifyContent: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: "bold",
  },
  overView: {
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CardInfo;
