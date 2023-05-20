import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import { View, TextInput, StyleSheet } from "react-native";

const AddPegawaiScreen = () => {
  const [nik, setNIK] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleAddPegawai = () => {

    setNIK("");
    setNama("");
    setPassword("");
    setRole("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Pegawai</Text>
      <TextInput
        style={styles.input}
        placeholder="NIK"
        value={nik}
        onChangeText={setNIK}
      />
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button mode="contained" onPress={handleAddPegawai} style={styles.button}>
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff5a5f",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ff5a5f",
  },
});

export default AddPegawaiScreen;
