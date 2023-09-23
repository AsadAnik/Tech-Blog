import { getCookie, setCookie } from "../utils/cookieUtils";
// All API ENDPOINTS will be there..
// And ALl Headers...
export const AUTH_API_URL = "https://blog-tech-api.onrender.com/api/v1/auth";
export const USER_API_URL = "https://blog-tech-api.onrender.com/api/v1/user";
export const bearerToken = getCookie("authToken");
console.log(bearerToken, " checking bearer token");

// Geti

// Headers..
export const headers = {
  Authorization: `Bearer ${bearerToken}`,
  ContentType: "application/json",
  Accept: "application/json",
};
