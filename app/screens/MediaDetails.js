import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import ImageCycle from "../Components/DetailComponents/ImageCycle";
import Screen from "./Screen";
import useApi from "../hooks/useApi";

function MediaDetails({ route }) {
  const { mediaType, mediaId } = route.params;
  const {
    data,
    error,
    loading,
    request: loadDetails,
  } = useApi(apiCalls.getMediaDetails);

  useEffect(() => {
    loadDetails(mediaType, mediaId);
  }, []);
  return (
    <Screen style={styles.screen}>
      <ImageCycle imageUrl={data.poster_path} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
});

export default MediaDetails;
