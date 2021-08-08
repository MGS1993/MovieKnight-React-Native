import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import ImageCycle from "../Components/DetailComponents/ImageCycle";
import OverView from "../Components/DetailComponents/OverView";
import ProviderInfo from "../Components/DetailComponents/ProviderInfo";
import Screen from "./Screen";
import TitleBlock from "../Components/DetailComponents/TitleBlock";
import useApi from "../hooks/useApi";

function MediaDetails({ route }) {
  const { mediaType, mediaId } = route.params;
  const {
    data,
    error,
    loading,
    request: loadDetails,
  } = useApi(apiCalls?.getMediaDetails);
  const { data: streamProviders, request: getStreamProviders } = useApi(
    apiCalls.getStreamData
  );

  useEffect(() => {
    loadDetails(mediaType, mediaId);
    getStreamProviders(mediaType, mediaId);
  }, []);
  return (
    <Screen style={styles.screen}>
      <ImageCycle imageUrl={data.poster_path} />
      <TitleBlock
        mediaType={mediaType}
        title={data.title || data.name}
        yearReleased={data.release_date}
      />
      <OverView overview={data.overview} />
      <ProviderInfo streamProviders={streamProviders} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
});

export default MediaDetails;
