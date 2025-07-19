import jwt from "jsonwebtoken";
import User from "@/models/User";
import { cookies } from "next/headers";
import connectDB from "./db";

export async function getUserFromToken() {
  await connectDB();

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    return user;
  } catch (err) {
    console.error("❌ Invalid JWT token:", err);
    return null;
  }
}
