import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import Search from "./src/components/Search";
import { useState } from "react";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

const App = () => {
  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
      <Restaurants term={term} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "skyblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default App;
