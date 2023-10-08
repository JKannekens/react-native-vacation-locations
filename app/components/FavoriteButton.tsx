import { StyleProp, View, ViewStyle } from "react-native";
import React from "react";
import Icon from "./Icon";
import { colors } from "../constants/theme";

type Props = {
  active?: boolean;
  styles?: StyleProp<ViewStyle>;
};

const FavoriteButton = ({ active, styles }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        ,
        styles,
      ]}
    >
      <Icon name={active ? "heart" : "heart-outline"} size={24} />
    </View>
  );
};

export default FavoriteButton;
