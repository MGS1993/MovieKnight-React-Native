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
  const [withoutGenreFil, setWithoutGenreFil] = useState([]);

  const [withGenre, setWithGenre] = useState();
  const [withoutGenre, setWithoutGenre] = useState();

  const [genreFilterVis, setGenreFilterVis] = useState(false);
  const [withoutGenreFilterVis, setWithoutGenreFilterVis] = useState(false);
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

  useEffect(() => {
    let withoutGenreQuery = arrayManipulate.genreRearrange(withoutGenreFil);
    setWithoutGenre(withoutGenreQuery);
  }, [withoutGenreFil]);

  //rearranges and renames object to match requirements of SelectBox
  const genre = arrayReArrange(data);
  //

  const navigate = () => {
    navigation.navigate(routes.FILTERED_SEARCH, {
      funcName: mediaType === "movie" ? "advMovieSearch" : "advTvSearch",
      funcVar: withGenre,
      otherVar: withoutGenre,
      mediaType: route.params.mediaType,
    });
    setGenreFilterVis(!genreFilterVis);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.modDiv}>
        <ModBtn
          filter={genreFilter}
          setFilter={setGenreFilter}
          options={genre}
          title="With Genre"
          visible={genreFilterVis}
          setVisible={setGenreFilterVis}
        />
        <ModBtn
          filter={withoutGenreFil}
          setFilter={setWithoutGenreFil}
          options={genre}
          title="Without Genre"
          visible={withoutGenreFilterVis}
          setVisible={setWithoutGenreFilterVis}
        />
      </View>

      <View style={styles.searchContainer}>
        <AppButton onPress={navigate} title="Search" />
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
  searchContainer: {
    bottom: 0,
    margin: "5%",
    position: "absolute",
    width: "100%",
  },
});

export default SearchScreen;
