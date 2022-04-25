import { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

const HomeScreen = () => {
  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png"),
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
    marginTop: -40,
    // flex: 1,
    // backgroundColor: "skyblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default HomeScreen;
