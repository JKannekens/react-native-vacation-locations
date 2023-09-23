import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sizes, spacing } from "../constants/theme";
import Icon from "./Icon";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
};

const MainHeader = ({ title }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Icon name="menu-outline" size={28} onPress={() => {}} />
      <Text style={styles.title}>{title}</Text>
      <Icon name="notifications-outline" size={28} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
  },
});

export default MainHeader;
