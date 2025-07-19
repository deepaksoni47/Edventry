import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Event from "@/models/Event";
import User from "@/models/User"; // ✅ import missing schema
import Category from "@/models/Category"; // ✅ if using .populate("category")
import { getUserFromToken } from "@/utils/auth";

export async function GET() {
  await connectDB();

  try {
    const events = await Event.find({ isPublished: true }).populate(
      "organizer category"
    );
    console.log("✅ Events fetched:", events.length);
    return NextResponse.json({ events });
  } catch (err) {
    console.error("❌ API ERROR /api/events:", err);
    return NextResponse.json(
      { error: "Failed to fetch events", details: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const tokenUser = await getUserFromToken(req); // Authenticated user
    if (!tokenUser || tokenUser.role !== "instructor") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const newEvent = new Event({ ...body, organizer: tokenUser.id });
    const savedEvent = await newEvent.save();

    return NextResponse.json({ event: savedEvent }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
