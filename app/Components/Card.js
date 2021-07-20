import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";

import CardInfo from "./CardInfo";

function Card({ imageUrl, onPress, overView, title, voteAverage }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* left side of card */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://image.tmdb.org/t/p/w780/" + imageUrl }}
            resizeMode="contain"
          />
        </View>

        {/* right side of card */}
        <CardInfo title={title} overView={overView} voteAverage={voteAverage} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.cardBG,
    display: "flex",
    flexDirection: "row",
    height: 220,
    width: "100%",
    top: 0,
  },

  image: {
    height: 150,
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    display: "flex",
    flex: 2,
  },
});

export default Card;
