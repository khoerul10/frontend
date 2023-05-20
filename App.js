import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import AdminNavigator from "./AdminNavigator";
import PegawaiNavigator from "./PegawaiNavigator";
import OnBoardingScreen from "./OnBoardingScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Onboarding" component={OnBoardingScreen} /> */}
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="AdminNavigator"
          options={{ headerShown: false }}
          component={AdminNavigator}
        />
        <Stack.Screen
          name="PegawaiNavigator"
          options={{ headerShown: false }}
          component={PegawaiNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
