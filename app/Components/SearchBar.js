import React from "react";

import { SearchBar } from "react-native-elements";

function AppSearchBar({ onChangeText, value }) {
  return (
    <SearchBar placeholder="Search" onChangeText={onChangeText} value={value} />
  );
}

export default AppSearchBar;
