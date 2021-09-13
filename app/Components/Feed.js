import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import ActivityIndicator from "./ActivityIndicator";
import mediaCalls from "../Util/mediaCalls";
import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../screens/Screen";
import useApi from "../hooks/useApi";

function Feed({ data, route, style }) {
  const [page, setPage] = useState(1);
  let apiCall = mediaCalls[route?.params.funcName]; // gets apiCall from import
  let funcVar = route?.params.funcVar; // gets variable for apiCall from route
  let funcCall = useApi(apiCall); // sets variable for useApi hook
  let otherVar = route?.params.otherVar; //misc variable passed from route
  let voteCount = route?.params.voteCount; // passed if needed from route
  //Runs from Routes
  if (route) {
    useEffect(() => {
      funcCall.request(funcVar, otherVar, voteCount, page);
    }, []);
  }

  //if HomeScreen empty Object if Routes FuncCall
  const { data: resData, error, loading, request } = funcCall || {};

  const getNextPage = async () => {
    if (!route) return null;
    try {
      let newData = await apiCall(funcVar, otherVar, page);
      //gets funcCall object if not homepage
      funcCall.addToList(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNextPage();
  }, [page]);

  const updatePage = () => {
    if (!route || route.name !== "FilteredSearch") return null;
    setPage((page) => page + 1);
  };
  return (
    <Screen style={style}>
      {data || route !== undefined ? (
        <>
          <ActivityIndicator visible={loading} />
          <FlatList
            data={data || resData}
            keyExtractor={(media) => media.id.toString()}
            onEndReached={updatePage}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <Card
                imageUrl={
                  item.backdrop_path || item.poster_path || item.profile_path
                }
                mediaType={item.media_type || route.params.mediaType}
                mediaId={item.id}
                overView={item.overview}
                title={item.title || item.name}
                voteAverage={item.vote_average}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeparator />}
          />
        </>
      ) : null}
    </Screen>
  );
}

export default Feed;
