import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../Components/AppButton";
import SearchBar from "../Components/SearchBar";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";

function SearchHub({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <Screen style={styles.container}>
      <View style={styles.searchWrapper}>
        <View>
          <Text style={styles.text}>Search</Text>
          <SearchBar
            onChangeText={(search) => setSearch(search)}
            value={search}
            onSubmit={() =>
              navigation.navigate(routes.SEARCH_RESULTS, {
                funcName: "multiSearch",
                funcVar: search,
              })
            }
          />
        </View>
        <View style={styles.manualSearch}>
          <AppButton
            style={styles.btnStyle}
            title="Movies"
            width="40%"
            onPress={() =>
              navigation.navigate(routes.SEARCH_SCREEN, {
                mediaType: "movie",
              })
            }
          />
          <AppButton
            style={styles.btnStyle}
            title="Tv Shows"
            width="40%"
            onPress={() =>
              navigation.navigate(routes.SEARCH_SCREEN, {
                mediaType: "tv",
              })
            }
          />
        </View>
      </View>
      <View style={styles.trendingWrapper}>
        {/* <AppButton
          style={styles.btnStyle}
          title="Top Movies"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TOP_MOVIES, {
              mediaType: "movie",
            })
          }
        />
        <AppButton
          style={styles.btnStyle}
          title="Top TV Shows"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TOP_MOVIES, {
              mediaType: "tv",
            })
          }
        /> */}

        <AppButton
          style={styles.btnStyle}
          title="Trending Movies"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TRENDING_MOVIES, {
              funcName: `trendingByType`,
              funcVar: "movie",
              mediaType: "movie",
            })
          }
        />
        <AppButton
          style={styles.btnStyle}
          title="Trending Tv Shows"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TRENDING_TV, {
              funcName: "trendingByType",
              funcVar: "tv",
              mediaType: "tv",
            })
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 15,
    height: 55,
    padding: 5,
  },
  container: {
    flexDirection: "column",
    top: 0,
  },
  manualSearch: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchWrapper: {
    flexDirection: "column",
    // top: "35%",
  },
  text: {
    alignSelf: "center",
    color: colors.accent,
    fontSize: 34,
    fontWeight: "bold",
  },
  trendingWrapper: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // top: "45%",
    justifyContent: "space-evenly",
  },
});

export default SearchHub;
