import React, { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AuthContext from "../auth/context";
import colors from "../config/colors";
import Icon from "../Components/Icon";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "./Screen";
import UiItem from "../Components/account/UiItem";

const menuItems = [
  {
    title: "My Tracked list",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.danger,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.safe,
    },
    // targetScreen: routes.MESSAGES,
  },
];

function AccountScreen(props) {
  // const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UiItem
          title={"Manuel"}
          subTitle={"Mannyg1218@yahoo.com"}
          image={require("../../assets/blankProf.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <UiItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              // onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <UiItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => console.log("logged out")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    top: Constants.statusBarHeight,
  },
});

export default AccountScreen;
