import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
    console.log(data);
  }, [term]);

  if (loading)
    return <ActivityIndicator size="large" marginVertical={30} color="#777" />;

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}> {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    height: 500,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    height: 100,
  },
});

export default Restaurants;
