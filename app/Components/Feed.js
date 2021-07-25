import React from "react";
import { FlatList } from "react-native";

import apiCalls from "../Util/apiCalls";
import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../screens/Screen";
import useApi from "../hooks/useApi";

function Feed({ data, params }) {
  if (!data) console.log("test");
  // const { data, error, loading, request} = useApi(`apiCalls.${params.funcName}`);

  return (
    <Screen>
      {data !== undefined ? (
        <FlatList
          data={data}
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
