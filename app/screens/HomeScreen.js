import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Constants from "expo-constants";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import Card from "../Components/Card";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function HomeScreen(props) {
  // const [test, setTest] = useState();
  // const [data, reload] = useApi();

  // console.log(data[0].backdrop_path);
  //TODO get list up and running.
  //TODO make a custom hook for apicalls
  // useEffect(() => {
  //   apiCalls.trendingMedia(setTest);
  // }, []);
  const [data] = useApi();
  console.log(data);
  return (
    <Screen style={styles.container}>
      {data !== undefined ? (
        <Card
          imageUrl={data[0].backdrop_path}
          overView={data[0].overview}
          title={data[0].title}
          voteAverage={data[0].vote_average}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBG,
    top: Constants.statusBarHeight,
  },
});

export default HomeScreen;
