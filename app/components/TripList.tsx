import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors, shadow, sizes, spacing } from "../constants/theme";
import FavoriteButton from "./FavoriteButton";
import { Location } from "../types/Location";

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

type Props = {
  locations: Location[];
};

const TripsList = ({ locations }: Props) => {
  return (
    <View style={styles.container}>
      {locations.map((item) => {
        return (
          <TouchableOpacity style={styles.cardContainer} key={item.id}>
            <View style={[styles.card, shadow.light]}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
    height: "auto",
  },
  card: {
    width: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
    marginBottom: 6,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default TripsList;
