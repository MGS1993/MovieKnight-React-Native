import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import SearchBar from "../Components/SearchBar";
import Screen from "./Screen";
import AppSearchBar from "../Components/SearchBar";
import ModBtn from "../Components/SearchBarModifiers";

function SearchScreen(props) {
  const [search, setSearch] = useState("");
  // const [visible, setVisible] = useState(true);

  return (
    <Screen style={styles.container}>
      <AppSearchBar
        onChangeText={(search) => setSearch(search)}
        value={search}
        // visible={visible}
      />
      <View style={styles.modDiv}>
        <ModBtn title="Genre" />
        <ModBtn title="Tv" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  modDiv: {
    justifyContent: "space-evenly",
  },
});

export default SearchScreen;
