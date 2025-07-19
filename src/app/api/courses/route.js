import Course from "@/models/Course";
import Category from "@/models/Category"; // Must be imported
import connectDB from "@/lib/db";
import { getUserFromToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const tag = url.searchParams.get("tag");

    const filter = { isPublished: true };
    if (category) filter.category = category;
    if (tag) filter.tags = { $in: [tag] };

    const courses = await Course.find(filter)
      .populate("instructor", "name")
      .populate("category", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json(courses);
  } catch (err) {
    console.error("❌ GET courses error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const user = await getUserFromToken(req);
    if (!user || user.role !== "instructor") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const course = await Course.create({
      ...data,
      instructor: user._id,
    });

    return NextResponse.json(course);
  } catch (err) {
    console.error("❌ POST course error:", err);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
