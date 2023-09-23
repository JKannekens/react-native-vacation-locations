import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { sizes, spacing } from "../constants/theme";

type Props = {
  mainTitle: string;
  subTitle: string;
};

const ScreenHeader = ({ mainTitle, subTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.title,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
