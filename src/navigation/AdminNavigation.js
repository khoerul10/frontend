import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import AddPegawai from "./AddPegawai";
import ProfilPegawai from "./ProfilPegawai";

const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddPegawai" component={AddPegawai} />
      <Tab.Screen name="ProfilPegawai" component={ProfilPegawai} />
    </Tab.Navigator>
  );
};

export default AdminNavigator;
