import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "./AppButton";
import AuthContext from "../auth/context";
import trackApi from "../Util/trackApi";

function Tracker({ mediaType, mediaData }) {
  if (mediaType !== "tv") return null;
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AppButton
        title="Track"
        onPress={() =>
          trackApi.handleTvTrack(mediaData, "/track_tv_show", user.email)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export default Tracker;
