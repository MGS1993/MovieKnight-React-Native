import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import apiCalls from "../Util/apiCalls";
import AppButton from "../Components/AppButton";
import colors from "../config/colors";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import { Picker } from "@react-native-picker/picker";

function SearchAdvanced({ route }) {
  const {
    data: genre,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.getMediaByGenre);
  const [selectedGenre, setSelectedGenre] = useState();

  let pickerItems = [];
  useEffect(() => {
    getData(route.params.mediaType);
  }, []);

  //TODO refactor below
  if (genre)
    genre.forEach((el, index) => {
      pickerItems.push(
        <Picker.Item
          style={styles.pickerItems}
          key={index}
          label={el.name}
          value={el.id}
        />
      );
    });

  return (
    <Screen style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            {" "}
            Top {route.params.mediaType} by selected Genre
          </Text>
          <View style={styles.pickerWrapper}>
            <Picker
              prompt="Genres"
              selectedValue={selectedGenre}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedGenre(itemValue)
              }
            >
              {pickerItems}
            </Picker>
          </View>
        </View>

        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            Top {route.params.mediaType} all genres
          </Text>
          <AppButton style={{ alignSelf: "center" }} title="Search All" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
  contentWrapper: {
    marginVertical: 20,
  },
  mainWrapper: {
    top: "30%",
  },
  picker: {
    alignSelf: "center",
    color: "white",
    flex: 1,
    width: "80%",
    textAlign: "center",
  },
  pickerItems: {
    fontSize: 20,
  },
  pickerWrapper: {
    alignSelf: "center",
    backgroundColor: colors.accent,
    borderRadius: 10,
    height: 50,
    width: "40%",
  },
  text: {
    alignSelf: "center",
    color: colors.accent,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },
});

export default SearchAdvanced;
