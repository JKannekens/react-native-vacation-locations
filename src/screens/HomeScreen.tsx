import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text>Test</Text>
    </View>
  );
};

export default HomeScreen;
