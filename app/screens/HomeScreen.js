import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import Feed from "../Components/Feed";
import useApi from "../hooks/useApi";

//TODO once backend is implemented, remove feed and set up tracked shows
function HomeScreen(props) {
  const {
    data,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.trendingMedia);

  useEffect(() => {
    getData();
  }, []);
  return <Feed data={data} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
});

export default HomeScreen;
