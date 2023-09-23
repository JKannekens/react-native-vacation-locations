import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SearchScreen from "../screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";
import { Animated, StyleSheet } from "react-native";
import { colors, sizes } from "../constants/theme";
import { useRef } from "react";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

type Tab = {
  name: string;
  component: () => React.JSX.Element;
  icon: keyof typeof Ionicons.glyphMap;
};

const tabs: Tab[] = [
  {
    name: "Home",
    component: HomeScreen,
    icon: "md-home-outline",
  },
  {
    name: "Search",
    component: SearchScreen,
    icon: "md-search-outline",
  },
  {
    name: "Favorites",
    component: FavoriteScreen,
    icon: "md-heart-outline",
  },
];

const TabNavigator = () => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        {tabs.map(({ name, component, icon }, index) => (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={icon}
                  size={28}
                  style={{
                    color: focused ? colors.primary : colors.gray,
                  }}
                />
              ),
            }}
            listeners={{
              focus: () => {
                Animated.spring(offsetAnimation, {
                  toValue: index * (sizes.width / tabs.length),
                  useNativeDriver: true,
                }).start();
              },
            }}
          />
        ))}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    position: "absolute",
    height: 2,
    width: 10,
    left: sizes.width / 3 / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 50,
  },
});

export default TabNavigator;
