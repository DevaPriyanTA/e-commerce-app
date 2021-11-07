import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2Y5NDIzODBhM2VjYzgxY2NmNjlkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTg0ODU3MywiZXhwIjoxNjM2MTA3NzczfQ.K90SFvAnX_SwbuK68WhG4XaeTi1WFghJmXwx3XNMKNQ";
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
