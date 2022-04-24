import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import useRestaurants from "../hooks/useRestaurants";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    height: 100,
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
