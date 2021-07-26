import React, { useEffect } from "react";
import { FlatList } from "react-native";

import apiCalls from "../Util/apiCalls";
import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../screens/Screen";
import useApi from "../hooks/useApi";

function Feed({ data, route, style }) {
  let apiCall;
  let funcVar;
  let funcCall;
  if (route) {
    apiCall = apiCalls[route.params.funcName];
    funcVar = route.params.funcVar;
    funcCall = useApi(apiCall);

    useEffect(() => {
      funcCall.request(funcVar);
    }, []);
  }
  const { data: resData, error, loading, request } = funcCall || {};
  return (
    <Screen style={style}>
      {data || route !== undefined ? (
        <FlatList
          data={data || resData}
          keyExtractor={(media) => media.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.backdrop_path}
              overView={item.overview}
              title={item.title}
              voteAverage={item.vote_average}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      ) : null}
    </Screen>
  );
}

export default Feed;
