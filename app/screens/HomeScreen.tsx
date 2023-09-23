import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../types/navigation/types";
import { colors } from "../constants/theme";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import TopPlacesCarousel from "../components/TopPlacesCarousel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const data = [
  {
    title: "Amalfi",
  },
  {
    title: "Paris",
  },
  {
    title: "London",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find your" subTitle="Dream trip" />
      <TopPlacesCarousel list={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
