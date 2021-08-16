import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ActivityIndicator from "../Components/ActivityIndicator";
import apiCalls from "../Util/apiCalls";
import ImageCycle from "../Components/DetailComponents/ImageCycle";
import OverView from "../Components/DetailComponents/OverView";
import ProviderInfo from "../Components/DetailComponents/ProviderInfo";
import TitleBlock from "../Components/DetailComponents/TitleBlock";
import useApi from "../hooks/useApi";

import Screen from "./Screen";

function MediaDetails({ route }) {
  const scrolling = useRef(new Animated.Value(0)).current;

  const translation = scrolling.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 120],
    extrapolate: "clamp",
  });

  const opacityScroll = scrolling.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  let style = {
    opacity: opacityScroll,
    transform: [{ translateY: translation }],
  };

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
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {loading ? (
          <ActivityIndicator visible={loading} />
        ) : (
          <>
            <ImageCycle imageUrl={data.poster_path} />
            <Animated.View style={[styles.card, style]}>
              <TitleBlock
                mediaType={mediaType}
                title={data.title || data.name}
                yearReleased={data.release_date}
              />
              <OverView overview={data.overview} />
            </Animated.View>

            <ProviderInfo streamProviders={streamProviders} />
          </>
        )}
      </Animated.ScrollView>
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
