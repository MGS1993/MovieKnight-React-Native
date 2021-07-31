import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import apiCalls from "../Util/apiCalls";
import AppButton from "../Components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import { Picker } from "@react-native-picker/picker";

function SearchAdvanced({ route, navigation }) {
  const {
    data: genre,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.getMediaGenre);
  const [selectedGenre, setSelectedGenre] = useState("");

  let pickerItems = [
    <Picker.Item style={styles.pickerItems} key={-1} label="Genre" value="1" />,
  ];
  useEffect(() => {
    getData(route.params.mediaType);
  }, []);

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
            Top {route.params.mediaType} by selected Genre
          </Text>
          <View style={styles.pickerWrapper}>
            <Picker
              prompt="Genres"
              selectedValue={selectedGenre}
              style={styles.picker}
              onValueChange={(itemCode, itemIndex) => {
                setSelectedGenre(itemCode);
                // let data = apiCalls.getMediaByGenre(
                //   route.params.mediaType,
                //   itemCode
                // );
                navigation.navigate(routes.TOP_MOVIES_GENRE, {
                  funcName: "getMediaByGenre",
                  funcVar: `${route.params.mediaType}`,
                  otherVar: `${itemCode}`,
                });
              }}
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
