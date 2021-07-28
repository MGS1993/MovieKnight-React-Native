import React from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../Components/AppButton";
import SearchBar from "../Components/SearchBar";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";

function SearchBtns({ navigation }) {
  return (
    <Screen style={styles.container}>
      {/* <SearchBar onChangeText={(search) => setSearch(search)} value={search} /> */}
      <View style={styles.trendingWrapper}>
        <AppButton
          style={styles.btnStyle}
          title="Top Movies"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TRENDING_MOVIES, {
              funcName: `trendingByType`,
              funcVar: "movie",
            })
          }
        />
        <AppButton
          style={styles.btnStyle}
          title="Top TV Shows"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TRENDING_TV, {
              funcName: "trendingByType",
              funcVar: "tv",
            })
          }
        />

        <AppButton
          style={styles.btnStyle}
          title="Trending Movies"
          width="40%"
          onPress={() =>
            navigation.navigate(routes.TRENDING_MOVIES, {
              funcName: `trendingByType`,
              funcVar: "movie",
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
            })
          }
        />
      </View>
      <View style={styles.searchWrapper}>
        <View>
          <Text style={styles.text}>Search for...</Text>
        </View>
        <View style={styles.manualSearch}>
          <AppButton
            style={styles.btnStyle}
            title="Trending Tv Shows"
            width="40%"
            onPress={() =>
              navigation.navigate(routes.TRENDING_TV, {
                funcName: "trendingByType",
                funcVar: "tv",
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
              })
            }
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  advSearchBtn: {
    top: 30,
  },
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
    top: "35%",
  },
  text: {
    alignSelf: "center",
    color: colors.accent,
    fontSize: 24,
    fontWeight: "bold",
  },
  trendingWrapper: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    top: "45%",
    justifyContent: "space-evenly",
  },
});

export default SearchBtns;
