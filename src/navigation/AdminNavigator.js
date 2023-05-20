import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import AddPegawai from "../screen/AddPegawai";
import ProfilPegawai from "./ProfilPegawai";

const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddPegawai") {
            iconName = focused ? "person-add" : "person-add-outline";
          } else if (route.name === "ProfilPegawai") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff5a5f",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
          borderTopWidth: 0,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 3,
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="AddPegawai"
        options={{ headerShown: false }}
        component={AddPegawai}
      />
      <Tab.Screen
        name="ProfilPegawai"
        options={{ headerShown: false }}
        component={ProfilPegawai}
      />
    </Tab.Navigator>
  );
};

export default AdminNavigator;
