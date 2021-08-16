import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function TitleBlock({ mediaType, title, yearReleased }) {
  // mediaType === 'movie' ?
  let yearReleasedV2 = yearReleased?.slice(0, 4);
  // console.log(text);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.miscInfoWrapper}>
        <Text style={styles.mediaType}>{mediaType}</Text>
        <Text style={styles.yearReleased}> {yearReleasedV2} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.cardBG,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mediaType: {
    color: colors.accent,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  miscInfoWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  yearReleased: {
    color: colors.accent,
    paddingHorizontal: 10,
  },
});

export default TitleBlock;
