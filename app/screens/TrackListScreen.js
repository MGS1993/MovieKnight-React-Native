import React, { useContext } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";

import AuthContext from "../auth/context";
import trackApi from "../Util/trackApi";
import Screen from "./Screen";

function TrackListScreen(props) {
  const { user } = useContext(AuthContext);
  if (user.email !== undefined) {
    trackApi.handleGetTracked(user.email);
  }
  return (
    <Screen>
      <View>
        <Text>test</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
