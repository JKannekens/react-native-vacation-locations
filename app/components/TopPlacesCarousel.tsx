import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import React from "react";
import { colors, shadow, sizes, spacing } from "../constants/theme";
import FavoriteButton from "./FavoriteButton";
import { Location } from "../types/Location";

type Props = {
  locations: Location[];
};

const CARD_HEIGHT = 200;
const CARD_WIDTH = sizes.width - 100;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({ locations }: Props) => {
  return (
    <FlatList
      data={locations}
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
              marginRight: index === locations.length - 1 ? spacing.l : 0,
            }}
          >
            <View style={[styles.card, shadow.dark]}>
              <FavoriteButton styles={styles.favorite} />
              <View style={styles.imageBox}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
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
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
  favorite: {
    position: "absolute",
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
});

export default TopPlacesCarousel;
