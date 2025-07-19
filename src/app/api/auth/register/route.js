import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
// POST /api/register
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password, role } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 409 }
      );
    }
    const newUser = new User({
      name,
      email,
      password: password,
      role: role || "student",
    });
    await newUser.save();
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Something went wrong during registration." },
      { status: 500 }
    );
  }
}
