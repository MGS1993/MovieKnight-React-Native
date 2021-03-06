import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ActivityIndicator from "../Components/ActivityIndicator";
import mediaCalls from "../Util/mediaCalls";
import ImageCycle from "../Components/DetailComponents/ImageCycle";
import OverView from "../Components/DetailComponents/OverView";
import ProviderInfo from "../Components/DetailComponents/ProviderInfo";
import TitleBlock from "../Components/DetailComponents/TitleBlock";
import Tracker from "../Components/Tracker";
import useApi from "../hooks/useApi";

import Screen from "./Screen";

function MediaDetails({ route }) {
  //TODO clean up animation code
  //TODO test on lower resolution devices
  const scrolling = useRef(new Animated.Value(0)).current;

  const translation = scrolling.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 120],
    extrapolate: "clamp",
  });

  const reverseTranslation = scrolling.interpolate({
    inputRange: [70, 120],
    outputRange: [40, -80],
    extrapolate: "clamp",
  });

  const opacityScroll = scrolling.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const reverseOpacityScroll = scrolling.interpolate({
    inputRange: [0, 120],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const animatedOverView = {
    opacity: opacityScroll,
    transform: [{ translateY: translation }],
  };

  const reverseAnimatedOverView = {
    transform: [{ translateY: reverseTranslation }],
  };

  const convertRuntime = (runTime) => {
    if (!runTime) return null;
    return Math.floor(runTime / 60) + ":" + (runTime % 60);
  };

  const { mediaType, mediaId } = route.params;
  const {
    data,
    error,
    loading,
    request: loadDetails,
  } = useApi(mediaCalls?.getMediaDetails);
  const { data: streamProviders, request: getStreamProviders } = useApi(
    mediaCalls.getStreamData
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
            <TitleBlock
              runTime={convertRuntime(data.runtime)}
              title={data.title || data.name}
              yearReleased={data.release_date || data.first_air_date}
              animationStyle={{ opacity: reverseOpacityScroll }}
            />
            <Animated.View style={reverseAnimatedOverView}>
              <View style={styles.card}>
                <OverView
                  overview={data.overview}
                  animationStyle={animatedOverView}
                  status={data?.status}
                />
              </View>

              <ProviderInfo streamProviders={streamProviders} />
              <Tracker
                mediaType={mediaType}
                mediaData={data}
                trackerStyle={styles.trackerContainer}
                visible={
                  data?.status === "Ended" || data?.next_episode_to_air === null
                    ? false
                    : true
                }
              />
            </Animated.View>
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
    width: "90%",
  },
  screen: {
    marginTop: Constants.statusBarHeight,
    height: "auto",
  },
  trackerContainer: {
    marginTop: 15,
  },
});

export default MediaDetails;
