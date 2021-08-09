import React from "react";
import { Image, View } from "react-native";

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

const buildIconArray = (data) => {
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

  data.forEach((el, index) => {
    newArr.push(
      <View style={icon} name={el.provider_name} key={index}>
        <Image
          style={image}
          source={{ uri: "https://image.tmdb.org/t/p/w92" + el.logo_path }}
        />
      </View>
    );
  });

  return newArr;
};

export default {
  buildIconArray,
  genreRearrange,
  reduceArrLen,
};
