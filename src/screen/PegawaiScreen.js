import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import ApiManager from "../api/ApiManager";
import { Axios } from "axios";

const PegawaiScreen = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [absensiList, setAbsensiList] = useState([]);
  const [nama, setNama] = useState("");
  const [nik, setNIK] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("id-ID", options);
    setCurrentDate(formattedDate);

    const timeOptions = { hour: "numeric", minute: "numeric" };
    const formattedTime = date.toLocaleTimeString("id-ID", timeOptions);
    setCurrentTime(formattedTime);

    const dummyAbsensi = [
      { tanggal: "20 Mei 2023", jam: "09:00" },
      { tanggal: "19 Mei 2023", jam: "08:30" },
      { tanggal: "18 Mei 2023", jam: "08:45" },
    ];
    setAbsensiList(dummyAbsensi);

    const fetchPegawaiInfo = async () => {
      try {
        const response = await ApiManager.get("http://localhost/user");
        setNama(response.data.nama);
        setNIK(response.data.nik);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPegawaiInfo();
  }, []);

  const handleAbsensi = async () => {
    try {
      const response = await ApiManager.post(
        "http://192.168.43.206:5000/absensi",
        {
          tanggal: currentDate,
          jam: currentTime,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nama: {nama}</Text>
        <Text style={styles.infoText}>NIK: {nik}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
      <Button mode="contained" onPress={handleAbsensi} style={styles.button}>
        Absensi
      </Button>
      <ScrollView style={styles.listContainer}>
        {absensiList.map((absensi, index) => (
          <View key={index} style={styles.absensiItem}>
            <Text style={styles.absensiTanggal}>{absensi.tanggal}</Text>
            <Text style={styles.absensiJam}>{absensi.jam}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  date: {
    fontSize: 24,
    color: "#333",
    marginBottom: 10,
  },
  time: {
    fontSize: 20,
    color: "#666",
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#ff5a5f",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  absensiItem: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  absensiTanggal: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  absensiJam: {
    fontSize: 14,
    color: "#666",
  },
});

export default PegawaiScreen;
