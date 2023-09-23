import { View, Text, FlatList } from "react-native";
import React from "react";

type Props = {
  list: {
    title: string;
  }[];
};

const TopPlacesCarousel = ({ list }: Props) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

export default TopPlacesCarousel;
