import React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";

import IconPlaceholder from "../Components/DetailComponents/IconPlaceholder";

//turns obj id values into consolidated strings for search query
const genreRearrange = (data) => {
  let queryStr = [];

  data.forEach((el) => {
    queryStr.push(el.id);
  });

  return queryStr.toString();
};

const reduceArrLen = (data, size) => {
  return data.slice(0, size);
};

const buildIconArray = (arr, setState) => {
  let newArr = [];
  const icon = {
    height: 65,
    margin: 5,
    width: 65,
  };
  const image = {
    height: 65,
    width: "100%",
  };

  arr.forEach((el, index) => {
    newArr.push(
      <TouchableWithoutFeedback
        onPress={() => setState(<IconPlaceholder key={index} />)}
      >
        <View style={icon} name={el.provider_name} key={index}>
          <Image
            style={image}
            source={{ uri: "https://image.tmdb.org/t/p/w92" + el.logo_path }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return newArr;
};

export default {
  buildIconArray,
  genreRearrange,
  reduceArrLen,
};
