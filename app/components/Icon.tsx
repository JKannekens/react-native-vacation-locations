import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: keyof typeof Ionicons.glyphMap;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
  style?: StyleProp<TextStyle>;
};

const Icon = ({ onPress, name, style, size = 32 }: Props) => {
  const image = (
    <Ionicons style={style} name={name} size={size} color="black" />
  );

  if (onPress) {
    return <TouchableOpacity onPress={() => {}}>{image}</TouchableOpacity>;
  }

  return image;
};

export default Icon;
