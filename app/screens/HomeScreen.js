import React, { useEffect } from "react";

import apiCalls from "../Util/apiCalls";
import Feed from "../Components/Feed";
import useApi from "../hooks/useApi";

function HomeScreen(props) {
  const {
    data,
    error,
    loading,
    request: getData,
  } = useApi(apiCalls.trendingMedia);
  useEffect(() => {
    getData();
  }, []);
  return <Feed data={data} />;
}

export default HomeScreen;
