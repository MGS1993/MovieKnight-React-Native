import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "./AppButton";
import AuthContext from "../auth/context";
import colors from "../config/colors";
import FadeInView from "./animatedComponents/FadeInView";
import TextAlert from "./TextAlert";
import trackApi from "../Util/trackApi";

function Tracker({ mediaType, mediaData, visible = false, trackerStyle }) {
  const [isTracking, setIsTracking] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  if (mediaType !== "tv") return null;
  if (!visible) return null;
  const { user } = useContext(AuthContext);

  const textColor = {
    color: responseMessage.length > 15 ? colors.danger : colors.safe,
  };

  const trackHandler = async () => {
    const { data, identifier } = await trackApi.handleTvTrack(
      mediaData,
      "/track_tv_show",
      user.email
    );

    await trackApi.appendNotificationIdentifier(data.tvShow._id, identifier);

    console.log(data);
    console.log(identifier);

    setIsTracking(true);
    setResponseMessage(data.msg);
  };

  return (
    <View style={[styles.container, trackerStyle]}>
      <AppButton title="Track" onPress={trackHandler} />
      <FadeInView startAnim={isTracking} /*isSpring={false}*/>
        <TextAlert textStyle={[styles.trackerAlert, textColor]}>
          {responseMessage}
        </TextAlert>
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
    fontSize: 18,
  },
});

export default Tracker;
