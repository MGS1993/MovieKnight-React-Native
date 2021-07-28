import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import colors from "../config/colors";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import { Picker } from "@react-native-picker/picker";

function SearchAdvanced(props) {
  const {
    data: genre,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.getMediaByGenre);
  const [selectedGenre, setSelectedGenre] = useState();

  let pickerItems = [];
  useEffect(() => {
    //have 'movie' be a variable passed down from nav params
    getData("movie");
  }, []);

  //TODO refactor below
  if (genre !== undefined) {
    genre.forEach((el, index) => {
      pickerItems.push(
        <Picker.Item key={index} label={el.name} value={el.id} />
      );
    });
  }
  // console.log(pickerItems);
  return (
    <Screen style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.text}> Top movies by selected Genre</Text>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={(itemValue, itemIndex) => setSelectedGenre(itemValue)}
        >
          {pickerItems}
        </Picker>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  text: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SearchAdvanced;
