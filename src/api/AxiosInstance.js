import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://your-backend-api.com", // Replace with your actual API URL
});

// Set the authentication token if needed
// api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

// Example usage for each endpoint
async function getCurrentUser() {
  try {
    const response = await api.get("/me");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function login(username, password) {
  try {
    const response = await api.post("/login", {
      nik,
      password,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function logout() {
  try {
    const response = await api.delete("/logout");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAllUsers() {
  try {
    const response = await api.get("/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createUser(user) {
  try {
    const response = await api.post("/users", user);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getUserById(userId) {
  try {
    const response = await api.get(`/users/${userId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function updateUserById(userId, updatedUser) {
  try {
    const response = await api.patch(`/users/${userId}`, updatedUser);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function deleteUserById(userId) {
  try {
    const response = await api.delete(`/users/${userId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createAbsensi(absensi) {
  try {
    const response = await api.post("/absensi", absensi);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAllAbsensi() {
  try {
    const response = await api.get("/absensi");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAbsensiById(absensiId) {
  try {
    const response = await api.get(`/absensi/${absensiId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function updateAbsensiById(absensiId, updatedAbsensi) {
  try {
    const response = await api.patch(`/absensi/${absensiId}`, updatedAbsensi);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function deleteAbsensiById(absensiId) {
  try {
    const response = await api.delete(`/absensi/${absensiId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getCurrentUser();
login("your-username", "your-password");
logout();
getAllUsers();
createUser({ username: "newuser", password: "newpassword" });
getUserById("user-id");
updateUserById("user-id", { username: "updated-username" });
deleteUserById("user-id");
createAbsensi({ userId: "user-id", absensiData: "data" });
getAllAbsensi();
getAbsensiById("absensi-id");
updateAbsensiById("absensi-id", { absensiData: "updated-data" });
deleteAbsensiById("absensi-id");
