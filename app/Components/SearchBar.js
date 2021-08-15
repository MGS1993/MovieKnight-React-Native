import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { SearchBar } from "react-native-elements";

function AppSearchBar({ onChangeText, value, onSubmit }) {
  return (
    <View style={styles.mainWrapper}>
      <SearchBar
        containerStyle={styles.container}
        style={styles.main}
        placeholder="Tv, movies, or actors"
        platform={
          Constants.platform["android"] !== undefined ? "android" : "ios"
        }
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  mainWrapper: {
    marginHorizontal: "5%",
    marginVertical: 15,
    width: "90%",
  },
  main: {
    // width: "90%",
  },
});
export default AppSearchBar;
