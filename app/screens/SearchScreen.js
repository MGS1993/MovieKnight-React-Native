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
      <Button title="click me bih" onPress={() => console.log(search)} />
      <AppButton title="test" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

export default SearchScreen;
