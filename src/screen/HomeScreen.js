import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <AntDesign name="user" size={40} color="#fff" />
          <Text style={styles.cardTitle}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <AntDesign name="inbox" size={40} color="#fff" />
          <Text style={styles.cardTitle}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <AntDesign name="barchart" size={40} color="#fff" />
          <Text style={styles.cardTitle}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <AntDesign name="settings" size={40} color="#fff" />
          <Text style={styles.cardTitle}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  card: {
    width: "48%",
    height: 200,
    backgroundColor: "#ff5a5f",
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
