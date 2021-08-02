import React, { useState } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

import colors from "../config/colors";
import AppButton from "./AppButton";

function SearchBarModifiers({ options, title, filter, setFilter }) {
  const [visible, setVisible] = useState(false);
  // const [filter, setFilter] = useState([]);

  // const options = [];

  const onMultiChange = () => {
    return (item) => setFilter(xorBy(filter, [item], "id"));
  };

  if (visible === true && filter !== undefined) {
    return (
      <TouchableWithoutFeedback>
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
              multiOptionContainerStyle={styles.multiOptionContainer}
              multiOptionsLabelStyle={styles.multiOptionsLabel}
              onMultiSelect={onMultiChange()}
              onTapClose={onMultiChange()}
              options={options}
              optionContainerStyle={styles.optionContainer}
              optionsLabelStyle={styles.optionLabel}
              selectedValues={filter}
              searchIconColor={colors.accent}
              toggleIconColor={colors.accent}
            />
          </View>
          <AppButton
            style={styles.button}
            onPress={() => setVisible(!visible)}
            title="Close"
          />
        </>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={styles.unToggled}>
      <Text style={styles.text}>Set {`${title}`} filter</Text>
      <AppButton
        style={styles.button}
        onPress={() => setVisible(!visible)}
        title="Toggle"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBG,
  },
  button: {
    height: 50,
    fontSize: 18,
    width: "30%",
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
    width: "90%",
  },
  multiOptionContainer: {
    backgroundColor: colors.accent,
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
  },
  unToggled: {
    margin: 20,
  },
});

export default SearchBarModifiers;
