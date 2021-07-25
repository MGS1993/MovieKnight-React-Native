import React from "react";
import { FlatList } from "react-native";

import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import useApi from "../hooks/useApi";
import Feed from "../Components/Feed";

function HomeScreen(props) {
  // apiCall={useApi(apiCalls.trendingMedia())}
  let test = useApi(apiCalls.trendingMedia());
  // console.log(" in homepage", apiCalls.trendingMedia());
  return <Feed apiCall={useApi(apiCalls.trendingMedia())} />;
}

export default HomeScreen;
