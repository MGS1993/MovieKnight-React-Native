import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import AppSearchBar from "../Components/SearchBar";
import arrayReArrange from "../Util/arrayReArrange";
import ModBtn from "../Components/SearchBarModifiers";
import Screen from "./Screen";
import useApi from "../hooks/useApi";

function SearchScreen({ navigation, route }) {
  const [search, setSearch] = useState("");
  const {
    data,
    error,
    loading,
    request: getGenre,
  } = useApi(apiCalls.getMediaGenre);
  const mediaType = route.params.mediaType;

  useEffect(() => {
    getGenre(mediaType);
  }, []);
  //rearranges and renames object to match requirements of SelectBox
  const genre = arrayReArrange(data);
  //
  return (
    <Screen style={styles.container}>
      <AppSearchBar
        onChangeText={(search) => setSearch(search)}
        value={search}
      />
      <View style={styles.modDiv}>
        <ModBtn options={genre} title="Genre" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
  modDiv: {
    justifyContent: "space-evenly",
  },
});

export default SearchScreen;
