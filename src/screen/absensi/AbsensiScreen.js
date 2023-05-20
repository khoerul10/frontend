import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import ApiManager from "./src/api/ApiManager";

const AbsensiScreen = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

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
  }, []);

  const handleAbsensi = async () => {
    try {
      const response = await axios.post("/absensi", {
        tanggal: currentDate,
        jam: currentTime,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
      <Button mode="contained" onPress={handleAbsensi} style={styles.button}>
        Absensi
      </Button>
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
    marginBottom: 20,
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
  },
});

export default AbsensiScreen;
