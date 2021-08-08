import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import ProviderIcon from "./ProviderIcon";

function ProviderInfo({ streamProviders }) {
  //TODO add multi country support
  if (streamProviders === undefined) return <View></View>;
  const { US: data } = streamProviders;

  // console.log(data);
  return (
    <View style={styles.container}>
      <ProviderIcon streamProviders={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.cardBG,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});

export default ProviderInfo;
