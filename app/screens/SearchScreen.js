import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

import apiCalls from "../Util/apiCalls";
import AppButton from "../Components/AppButton";
import arrayManipulate from "../Util/arrayManipulate";
// import AppSearchBar from "../Components/SearchBar";
import arrayReArrange from "../Util/arrayReArrange";
import ModBtn from "../Components/SearchBarModifiers";
import routes from "../navigation/routes";
import Screen from "./Screen";
import useApi from "../hooks/useApi";

function SearchScreen({ navigation, route }) {
  // const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);
  const [withGenre, setWithGenre] = useState();
  const mediaType = route.params.mediaType;
  const {
    data,
    error,
    loading,
    request: getGenre,
  } = useApi(apiCalls.getMediaGenre);

  useEffect(() => {
    getGenre(mediaType);
  }, []);
  useEffect(() => {
    let genreQuery = arrayManipulate.genreRearrange(genreFilter);
    setWithGenre(genreQuery);
  }, [genreFilter]);

  //rearranges and renames object to match requirements of SelectBox
  const genre = arrayReArrange(data);
  //
  return (
    <Screen style={styles.container}>
      {/* <AppSearchBar
        value={search}
        onChangeText={(search) => setSearch(search)}
        // onSubmit={}
      /> */}
      <View style={styles.modDiv}>
        <ModBtn
          filter={genreFilter}
          setFilter={setGenreFilter}
          options={genre}
          title="Genre"
        />
      </View>

      <View>
        <AppButton
          onPress={() =>
            navigation.navigate(routes.FILTERED_SEARCH, {
              funcName:
                mediaType === "movie" ? "advMovieSearch" : "advTvSearch",
              funcVar: withGenre,
            })
          }
          title="Search"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
  modDiv: {
    justifyContent: "space-evenly",
  },
});

export default SearchScreen;
