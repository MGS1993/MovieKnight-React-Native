import React from "react";
import { FlatList } from "react-native";

import Card from "../Components/Card";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../screens/Screen";

function Feed({ apiCall }) {
  const data = apiCall;
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
