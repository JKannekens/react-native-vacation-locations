import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SearchScreen from "../screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";

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
    icon: "md-home",
  },
  {
    name: "Search",
    component: SearchScreen,
    icon: "md-search",
  },
  {
    name: "Favorites",
    component: FavoriteScreen,
    icon: "md-heart",
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabs.map(({ name, component, icon }) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={icon}
                size={30}
                style={{
                  color: focused ? "black" : "gray",
                }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
