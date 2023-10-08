import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { sizes, spacing } from "../constants/theme";

type Props = {
  title: string;
  buttonTitle: string;
  onPress?: () => {};
};

const SectionHeader = ({ title, onPress, buttonTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: sizes.h3,
    color: "#007AFF",
  },
});

export default SectionHeader;
