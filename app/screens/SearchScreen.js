import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import mediaCalls from "../Util/mediaCalls";
import AppButton from "../Components/AppButton";
import arrayManipulate from "../Util/arrayManipulate";
import arrayReArrange from "../Util/arrayReArrange";
import colors from "../config/colors";
import ErrorNotice from "../Components/ErrorNotice";
import ModBtn from "../Components/SearchModifier";
import routes from "../navigation/routes";
import Screen from "./Screen";
import useApi from "../hooks/useApi";

function SearchScreen({ navigation, route }) {
  const [genreFilter, setGenreFilter] = useState([]);
  const [withoutGenreFil, setWithoutGenreFil] = useState([]);
  const [isWithGenreOpen, setIsWithGenreOpen] = useState(false);

  const [withGenre, setWithGenre] = useState();
  const [withoutGenre, setWithoutGenre] = useState();
  const [isWithoutGenreOpen, setIsWithoutGenreOpen] = useState(false);

  const [genreConflict, setGenreConflict] = useState(false);
  const mediaType = route.params.mediaType;
  const {
    data,
    error,
    loading,
    request: getGenre,
  } = useApi(mediaCalls.getMediaGenre);

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

  useEffect(() => {
    setGenreConflict(
      arrayManipulate.findCommonElements(withGenre, withoutGenre)
    );
  }, [withGenre, withoutGenre]);

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
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.modDiv}>
        <ModBtn
          filter={genreFilter}
          setFilter={setGenreFilter}
          optionColor={colors.safe}
          options={genre}
          title="With Genre"
          isOpen={isWithGenreOpen}
          setIsOpen={setIsWithGenreOpen}
        />
        <ModBtn
          filter={withoutGenreFil}
          setFilter={setWithoutGenreFil}
          optionColor={colors.danger}
          options={genre}
          title="Without Genre"
          isOpen={isWithoutGenreOpen}
          setIsOpen={setIsWithoutGenreOpen}
        />
      </View>

      <View style={styles.searchContainer}>
        {genreConflict ? (
          <ErrorNotice />
        ) : (
          <AppButton
            onPress={navigate}
            title="Search"
            style={{ marginHorizontal: "5%" }}
          />
        )}
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
    marginVertical: "5%",
    position: "absolute",
    width: "100%",
    justifyContent: "center",
  },
});

export default SearchScreen;
