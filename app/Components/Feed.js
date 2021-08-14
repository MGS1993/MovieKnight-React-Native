import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import ActivityIndicator from "./ActivityIndicator";
import apiCalls from "../Util/apiCalls";
import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../screens/Screen";
import useApi from "../hooks/useApi";

//TODO find a way to optimize the FlatList
//TODO: check if variable order rin request affects functions
function Feed({ data, route, style }) {
  const [page, setPage] = useState(1);
  let apiCall = apiCalls[route?.params.funcName]; // gets apiCall from import
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
  //PAGE ISN'T UPDATED IN THE FUNCTION ITSELF. MAYBE MOVE THE SETPAGE
  //LOGIC OUTSIDE

  //if HomeScreen empty Object if Routes FuncCall
  const { data: resData, error, loading, request } = funcCall || {};
  console.log(page);

  const getNextPage = async () => {
    if (!route) return null;
    console.log("immediately after setting page", page);
    try {
      console.log("page before newData", page);
      let newData = await apiCall(funcVar, page);
      console.log(newData);
      funcCall.addToList(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNextPage();
  }, [page]);
  // const handleEnd = () => {

  //   getNextPage();
  // };
  return (
    <Screen style={style}>
      {data || route !== undefined ? (
        <>
          <ActivityIndicator visible={loading} />
          <FlatList
            data={data || resData}
            keyExtractor={(media) => media.id.toString()}
            onEndReached={() => setPage((page) => page + 1)}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <Card
                imageUrl={item.backdrop_path}
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
