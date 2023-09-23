import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { sizes, spacing } from "../constants/theme";

type Props = {
  list: {
    id: string;
    title: string;
    image: string;
  }[];
};

const CARD_HEIGHT = 200;
const CARD_WIDTH = sizes.width - 100;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({ list }: Props) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}
          >
            <View style={styles.card}>
              <View style={styles.imageBox}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
});

export default TopPlacesCarousel;
