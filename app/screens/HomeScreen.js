import React from "react";
import { FlatList } from "react-native";

import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import useApi from "../hooks/useApi";
import Feed from "../Components/Feed";

function HomeScreen(props) {
  return <Feed apiCall={useApi(apiCalls.getListings())} />;
}

export default HomeScreen;
