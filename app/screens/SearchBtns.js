import React from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "../Components/AppButton";
import SearchBar from "../Components/SearchBar";
import routes from "../navigation/routes";
import Screen from "./Screen";

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
        <AppButton
          title="Trending Tv Shows"
          onPress={() =>
            navigation.navigate(routes.TRENDING_TV, {
              funcName: "trendingByType",
              funcVar: "tv",
            })
          }
        />
        <AppButton title="Search" style={styles.advSearchBtn} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    top: 0,
  },
  advSearchBtn: {
    top: 30,
  },
  trendingWrapper: {
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
});

export default SearchBtns;
