import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import ApiManager from "../api/ApiManager";

const LoginScreen = () => {
  const [nik, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await ApiManager.post("/login", { nik, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="nik" value={nik} onChangeText={setNik} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
