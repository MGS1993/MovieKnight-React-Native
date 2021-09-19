import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import mediaCalls from "../../Util/mediaCalls";
import useApi from "../../hooks/useApi";
import TrackerInfo from "./TrackerInfo";
import colors from "../../config/colors";
import Icon from "../Icon";

function TrackerCard({ id }) {
  const { data, request: getDetails } = useApi(mediaCalls.getMediaDetails);
  const image = { uri: "https://image.tmdb.org/t/p/w300/" + data.poster_path };

  useEffect(() => {
    getDetails("tv", id);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        blurRadius={0.5}
      >
        <View style={styles.child}>
          <TrackerInfo
            title={data.name}
            nextEp={data?.next_episode_to_air?.air_date}
          />
          <TouchableOpacity style={styles.deleteBtn}>
            <Icon
              name="trash-can-outline"
              size={35}
              iconColor={colors.danger}
              backgroundColor={"rgba(0,0,0,0.3)"}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 120,
    width: "90%",
    marginVertical: 10,
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default TrackerCard;
