import React from "react";
import { FlatList } from "react-native";

import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "./Screen";

import apiCalls from "../Util/apiCalls";
import useApi from "../hooks/useApi";

function HomeScreen(props) {
  const [data] = useApi(apiCalls.trendingMedia);

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

export default HomeScreen;
