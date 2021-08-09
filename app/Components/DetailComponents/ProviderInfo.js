import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import IconPlaceholder from "./IconPlaceholder";
import ProviderIcon from "./ProviderIcon";

function ProviderInfo({ streamProviders }) {
  //TODO add multi country support
  if (streamProviders?.US === undefined) return <View></View>;
  const { buy, flatrate, flatrate_and_buy: tempBuy, rent } = streamProviders.US;
  // console.log(streamProviders);
  // console.log("buy", buy);
  // console.log("flatrate", flatrate);
  // console.log("rent", rent);

  return (
    <View style={styles.container}>
      <ProviderIcon data={buy} title="Buy" />
      <ProviderIcon data={rent} title="Rent" />
      <ProviderIcon data={flatrate} title="Stream" />
      <ProviderIcon data={tempBuy} title="Stream Premium" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.cardBG,
    flexDirection: "row",
    // height: 140,
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});

export default ProviderInfo;
