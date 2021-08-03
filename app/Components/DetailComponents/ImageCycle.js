import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

function ImageCycle({ imageUrl }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        preview={{ uri: "https://image.tmdb.org/t/p/w300/" + imageUrl }}
        uri={"https://image.tmdb.org/t/p/w780/" + imageUrl}
        transitionDuration={100}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "80%",
  },
});

export default ImageCycle;
