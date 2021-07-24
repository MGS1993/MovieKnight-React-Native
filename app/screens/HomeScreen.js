import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../Components/Card";
import Constants from "expo-constants";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function HomeScreen(props) {
  //TODO get list up and running.
  const [data] = useApi(apiCalls.trendingMedia);

  return (
    <Screen style={styles.container}>
      {data !== undefined ? (
        // <Card
        //   imageUrl={data[0].backdrop_path}
        //   overView={data[0].overview}
        //   title={data[0].title}
        //   voteAverage={data[0].vote_average}
        // />
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
