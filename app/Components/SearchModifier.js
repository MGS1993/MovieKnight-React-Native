import React, { useState } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

import Arrow from "./Arrow";
import colors from "../config/colors";

function SearchBarModifiers({
  optionColor,
  options,
  title,
  filter,
  setFilter,
  isOpen,
  setIsOpen,
}) {
  // const [isOpen, setIsOpen] = useState(false);

  const onMultiChange = () => {
    return (item) => setFilter(xorBy(filter, [item], "id"));
  };
  return (
    <>
      <View style={styles.mainWrapper}>
        <Text style={styles.text}>Select {`${title}`}</Text>

        <SelectBox
          arrowIconColor={colors.accent}
          containerStyle={styles.container}
          label="Select multiple"
          labelStyle={styles.label}
          isMulti
          inputFilterContainerStyle={styles.inputFilterContainer}
          multiOptionContainerStyle={{ backgroundColor: optionColor }}
          multiOptionsLabelStyle={styles.multiOptionsLabel}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          options={options}
          optionContainerStyle={styles.optionContainer}
          optionsLabelStyle={styles.optionLabel}
          selectedValues={filter}
          selectIcon={
            <Arrow isOpen={isOpen} onPress={() => setIsOpen(!isOpen)} />
          }
          searchIconColor={colors.accent}
          showOptions={isOpen}
          setShowOptions={setIsOpen}
          toggleIconColor={colors.accent}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBG,
  },
  inputFilterContainer: {
    backgroundColor: colors.white,
    color: colors.accent,
  },
  label: {
    color: colors.accent,
    backgroundColor: colors.mainBG,
    fontSize: 18,
    textAlign: "center",
  },
  mainWrapper: {
    alignSelf: "center",
    marginVertical: 20,
    width: "90%",
    elevation: 2,
  },
  multiOptionsLabel: {
    fontSize: 16,
  },
  optionContainer: {
    backgroundColor: colors.white,
  },
  optionLabel: {
    color: "black",
    fontSize: 20,
  },
  text: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});

export default SearchBarModifiers;
