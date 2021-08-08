import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function ProviderInfo({ streamProviders }) {
  // const { US: data } = streamProviders;
  // if (streamProviders.US === null || streamProviders.US === undefined)
  //   return <View></View>;

  // console.log(data);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBG,
    height: 100,
    marginVertical: 20,
  },
});

export default ProviderInfo;
