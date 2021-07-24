import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../Components/Card";
import Constants from "expo-constants";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function HomeScreen(props) {
  const [data] = useApi(apiCalls.trendingMedia);

  return (
    <Screen style={styles.container}>
      {data !== undefined ? (
        <FlatList
          data={data}
          keyExtractor={(media) => media.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.backdrop_path}
              overView={item.overview}
              title={item.title}
              voteAverage={item.vote_average}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBG,
    // top: Constants.statusBarHeight,
    // top: 0,
  },
});

export default HomeScreen;
