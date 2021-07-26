import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native";

import apiCalls from "../Util/apiCalls";
import AppButton from "../Components/AppButton";
import SearchBar from "../Components/SearchBar";
import routes from "../navigation/routes";
import Screen from "./Screen";
import useApi from "../hooks/useApi";

function SearchBtns({ navigation }) {
  return (
    <Screen style={styles.container}>
      {/* <SearchBar onChangeText={(search) => setSearch(search)} value={search} /> */}
      <View style={styles.trendingWrapper}>
        <AppButton
          title="Trending Movies"
          onPress={() =>
            navigation.navigate(routes.TRENDING_MOVIES, {
              funcName: `trendingByType`,
              funcVar: "movie",
            })
          }
        />
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

export default SearchBtns;
