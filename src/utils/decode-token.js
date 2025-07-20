// utils/decodeToken.js
import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode(token); // returns decoded payload
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
