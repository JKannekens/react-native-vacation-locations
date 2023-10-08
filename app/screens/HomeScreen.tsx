import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/theme";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import TopPlacesCarousel from "../components/TopPlacesCarousel";
import SectionHeader from "../components/SectionHeader";
import TripsList from "../components/TripList";
import locations from "../data/Locations";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find your" subTitle="Dream trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel locations={locations} />
        <SectionHeader title="Popular Trips" buttonTitle="See All" />
        <TripsList locations={locations} />
      </ScrollView>
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
