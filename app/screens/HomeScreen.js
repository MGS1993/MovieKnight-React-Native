import React from "react";

import apiCalls from "../Util/apiCalls";
import useApi from "../hooks/useApi";
import Feed from "../Components/Feed";

function HomeScreen(props) {
  return <Feed apiCall={useApi(apiCalls.trendingMedia())} />;
}

export default HomeScreen;
