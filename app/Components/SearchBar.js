import React from "react";
import { StyleSheet, View } from "react-native";

import { SearchBar } from "react-native-elements";

function AppSearchBar({ visible = false, onChangeText, value }) {
  if (!visible) return <View style={styles.substitute} />;
  return (
    <SearchBar placeholder="Search" onChangeText={onChangeText} value={value} />
  );
}

const styles = StyleSheet.create({
  substitute: {
    height: 65,
    width: "100%",
  },
});
export default AppSearchBar;
