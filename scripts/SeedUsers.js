import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../src/models/User.js";

const MONGO_URI =
  "mongodb+srv://ddeeppaakkssoonnii:YbfJUd02AJvCZjP3@edventry-cluster.ckb0qae.mongodb.net/edventry?retryWrites=true&w=majority&appName=edventry-cluster";

async function seedAdmin() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const existingAdmin = await User.findOne({ email: "admin@edventry.com" });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit(0);
    }

    const adminUser = new User({
      name: "Admin",
      email: "admin@edventry.com",
      password: "dnajsadmin",
      role: "admin",
    });

    await adminUser.save();
    console.log("🎉 Admin user seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed admin user:", error);
    process.exit(1);
  }
}

seedAdmin();
