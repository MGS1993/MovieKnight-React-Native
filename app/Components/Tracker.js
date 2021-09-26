import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "./AppButton";
import AuthContext from "../auth/context";
import colors from "../config/colors";
import FadeInView from "./animatedComponents/FadeInView";
import TextAlert from "./TextAlert";
import trackApi from "../Util/trackApi";

function Tracker({ mediaType, mediaData, visible = false }) {
  const [isTracking, setIsTracking] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  if (mediaType !== "tv") return null;
  if (!visible) return null;
  const { user } = useContext(AuthContext);

  const trackHandler = async () => {
    const { data } = await trackApi.handleTvTrack(
      mediaData,
      "/track_tv_show",
      user.email
    );

    setIsTracking(true);
    setResponseMessage(data.msg);
  };

  return (
    <View style={styles.container}>
      <AppButton title="Track" onPress={trackHandler} />
      <FadeInView startAnim={isTracking} isSpring={false}>
        <TextAlert textStyle={styles.trackerAlert}>{responseMessage}</TextAlert>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  trackerAlert: {
    color: colors.safe,
    fontSize: 18,
  },
});

export default Tracker;
