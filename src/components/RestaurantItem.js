import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { elevation } from "../commons/styles";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.elevation, styles.container]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.info}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.infoc}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoc: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "orange",
  },
});
export default RestaurantItem;
