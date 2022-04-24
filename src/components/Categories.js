import React from "react";
import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({ commonCategories, term, setTerm }) => {
  return (
    <View>
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              active={item.name == term}
              handlePress={() => setTerm(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollsToTop={true}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
};

export default Categories;
