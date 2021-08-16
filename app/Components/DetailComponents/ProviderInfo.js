import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet } from "react-native";

import arrayManipulate from "../../Util/arrayManipulate";
import IconPlaceholder from "./IconPlaceholder";
import colors from "../../config/colors";
import ProviderIcon from "./ProviderIcon";

function ProviderInfo({ streamProviders }) {
  //TODO add multi country support
  //TODO animate provider icons
  const [buyIcon, setBuyIcon] = useState(IconPlaceholder);
  const [rentIcon, setRentIcon] = useState(IconPlaceholder);
  const [flatrateIcon, setFlatrateIcon] = useState(IconPlaceholder);
  const [tempBuyIcon, setTempBuyIcon] = useState(IconPlaceholder);

  if (streamProviders?.US === undefined) return <View></View>;
  const { buy, flatrate, flatrate_and_buy: tempBuy, rent } = streamProviders.US;

  //Icons minimized by passing state into arrayManipulate
  const expandIcons = (data, setState) => {
    //checks if any other providerIcons are open and closes them
    checkState();
    let arr = arrayManipulate.reduceArrLen(data, 6);
    let icons = arrayManipulate.buildIconArray(arr, setState);
    setState(icons);
  };

  const checkState = () => {
    const checkList = [buyIcon, rentIcon, flatrateIcon, tempBuyIcon];
    const setStateList = [
      setBuyIcon,
      setRentIcon,
      setFlatrateIcon,
      setTempBuyIcon,
    ];
    checkList.forEach((el, index) => {
      if (el.length > 1) {
        const newState = setStateList[index];
        newState(IconPlaceholder);
      }
    });
  };
  return (
    <View style={styles.container}>
      <ProviderIcon
        data={buy}
        icon={buyIcon}
        onPress={() => expandIcons(buy, setBuyIcon)}
        title="Buy"
      />
      <ProviderIcon
        data={rent}
        icon={rentIcon}
        onPress={() => expandIcons(rent, setRentIcon)}
        title="Rent"
      />
      <ProviderIcon
        data={flatrate}
        icon={flatrateIcon}
        onPress={() => expandIcons(flatrate, setFlatrateIcon)}
        title="Stream"
      />
      <ProviderIcon
        data={tempBuy}
        icon={tempBuyIcon}
        onPress={() => expandIcons(tempBuy, setTempBuyIcon)}
        title="Stream Premium"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.mainBG,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});

export default ProviderInfo;
