import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PegawaiScreen from "../screen/PegawaiScreen";

const Stack = createStackNavigator();

const PegawaiNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pegawai"
        options={{ headerShown: false }}
        component={PegawaiScreen}
      />
    </Stack.Navigator>
  );
};

export default PegawaiNavigator;
