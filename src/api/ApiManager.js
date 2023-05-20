import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.100:5000",
  responseType: "json",
  withCredentials: true,
});

const apiMethods = {
  me: () => api.get("/me"),
  login: userData => api.post("/login", userData),
  logout: () => api.delete("/logout"),
  getUsers: () => api.get("/users"),
  createUser: userData => api.post("/users", userData),
  getUserById: userId => api.get(`/users/${userId}`),
  updateUser: (userId, userData) => api.patch(`/users/${userId}`, userData),
  deleteUser: userId => api.delete(`/users/${userId}`),
  createAbsensi: absensiData => api.post("/absensi", absensiData),
  getAbsensi: () => api.get("/absensi"),
  getAbsensiById: absensiId => api.get(`/absensi/${absensiId}`),
  updateAbsensiById: (absensiId, absensiData) =>
    api.patch(`/absensi/${absensiId}`, absensiData),
  deleteAbsensi: absensiId => api.delete(`/absensi/${absensiId}`),
};
ri;
export default apiMethods;
