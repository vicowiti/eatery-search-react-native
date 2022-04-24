import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../commons/styles";
import { useState } from "react";

const Search = ({ setTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleEndEditing = () => {
    if (!inputValue) return;
    setTerm(inputValue);
    setInputValue("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Restaurants, food..."
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",

    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
