import React, { useContext, useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ActivityIndicator from "../Components/ActivityIndicator";
import AuthContext from "../auth/context";
import trackApi from "../Util/trackApi";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import TrackerCard from "../Components/trackerCard/TrackerCard";

function TrackListScreen(props) {
  const { user } = useContext(AuthContext);

  const {
    data,
    setData,
    loading,
    request: getTracked,
  } = useApi(trackApi.handleGetTracked);

  useEffect(() => {
    getTracked(user.email);
  }, []);

  //TODO optimize code so that it doesn't reload. maybe react memo
  const updateTracked = async () => {
    const newData = getTracked(user.email);
    setData(newData);
  };
  return (
    <Screen style={styles.screen}>
      {loading ? (
        <ActivityIndicator visible={loading} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.trackerWrapper}>
              <TrackerCard
                id={item.id}
                userEmail={user.email}
                updateTracked={updateTracked}
              />
            </View>
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
  trackerWrapper: {
    alignItems: "center",
    display: "flex",
  },
});

export default TrackListScreen;
