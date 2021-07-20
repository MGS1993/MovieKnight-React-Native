import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../Components/AppButton";
import Constants from "expo-constants";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import Card from "../Components/Card";

function HomeScreen(props) {
  const [test, setTest] = useState();

  useEffect(() => {
    apiCalls.trendingMedia(setTest);
  }, []);

  return (
    <Screen style={styles.container}>
      {test !== undefined ? (
        <Card
          imageUrl={test[0].backdrop_path}
          overView={test[0].overview}
          title={test[0].title}
          voteAverage={test[0].vote_average}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    top: Constants.statusBarHeight,
  },
});

export default HomeScreen;
