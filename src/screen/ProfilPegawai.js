import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfilePegawai = () => {
  const nama = "John Doe";
  const nik = "1234567890";
  const role = "Frontend Developer";
  const email = "johndoe@example.com";
  const phoneNumber = "+1 123-456-7890";
  const address = "123 Main St, City, Country";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/splash.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{nama}</Text>
        <Text style={styles.nik}>NIK: {nik}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.info}>{role}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{phoneNumber}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.info}>{address}</Text>
        </View>
        {/* Tambahkan informasi menarik lainnya */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  nik: {
    fontSize: 16,
    color: "#666",
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    flex: 2,
    fontSize: 16,
    color: "#666",
  },
});

export default ProfilePegawai;
