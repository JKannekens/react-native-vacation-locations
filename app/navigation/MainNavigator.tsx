import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation/types";
import TabNavigator from "./TabNavigator";
import { StatusBar } from "expo-status-bar";

const MainNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
