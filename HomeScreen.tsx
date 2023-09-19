import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to profile screen"
        onPress={() =>
          navigation.navigate("Profile", {
            userID: "ID",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
