import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ActivityIndicator from "../Components/ActivityIndicator";
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
      <ScrollView>
        {loading ? (
          <ActivityIndicator visible={loading} />
        ) : (
          <>
            <ImageCycle imageUrl={data.poster_path} />
            <View style={styles.card}>
              <TitleBlock
                mediaType={mediaType}
                title={data.title || data.name}
                yearReleased={data.release_date}
              />
              <OverView overview={data.overview} />
            </View>

            <ProviderInfo streamProviders={streamProviders} />
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    borderRadius: 20,
    bottom: 100,
    width: "80%",
  },
  screen: {
    marginTop: Constants.statusBarHeight,
    height: "auto",
  },
});

export default MediaDetails;
