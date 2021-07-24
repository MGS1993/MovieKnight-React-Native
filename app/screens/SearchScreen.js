import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";

import AppButton from "../Components/AppButton";
import SearchBar from "../Components/SearchBar";
import Screen from "./Screen";

function SearchScreen(props) {
  const [search, setSearch] = useState("");

  return (
    <Screen style={styles.container}>
      <SearchBar onChangeText={(search) => setSearch(search)} value={search} />
      <View style={styles.trendingWrapper}>
        <AppButton title="Trending Movies" />
        <AppButton title="Trending Tv Shows" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  trendingWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default SearchScreen;
