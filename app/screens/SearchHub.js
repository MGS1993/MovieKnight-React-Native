import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import apiCalls from "../Util/apiCalls";
import AppButton from "../Components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import { Picker } from "@react-native-picker/picker";

//TODO add multi genre picking
function SearchHub({ route, navigation }) {
  const {
    data: genre,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.getMediaGenre);
  const [selectedGenre, setSelectedGenre] = useState("");
  const mediaType = route.params.mediaType;
  let pickerItems = [
    <Picker.Item style={styles.pickerItems} key={-1} label="Genre" value="1" />,
  ];

  const navigate = (itemCode) => {
    if (selectedGenre === "") {
      return null;
    }
    navigation.navigate(routes.TOP_MOVIES_GENRE, {
      funcName: "getMediaByGenre",
      funcVar: `${mediaType}`,
      otherVar: `${itemCode}`,
      voteCount: "200",
    });
  };

  useEffect(() => {
    getData(mediaType);
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
          <Text style={styles.text}>Top {mediaType} by selected Genre</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              prompt="Genres"
              selectedValue={selectedGenre}
              style={styles.picker}
              onValueChange={(itemCode, itemIndex) => {
                setSelectedGenre(itemCode);
                navigate(itemCode);
              }}
            >
              {pickerItems}
            </Picker>
          </View>
        </View>

        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Top {mediaType} all genres</Text>
          <AppButton
            style={{ alignSelf: "center" }}
            title="Search All"
            onPress={() =>
              navigation.navigate(routes.TOP_MEDIA_ALL_GENRE, {
                funcName: "getTopMediaAllGenres",
                funcVar: `${mediaType}`,
                otherVar: 5000,
              })
            }
          />
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

export default SearchHub;
