// src/app/api/events/route.js

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Event from "@/models/Event";
import { getUserFromToken } from "@/utils/auth"; // custom utility to extract user from token

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
export async function GET() {
  await connectDB();

  try {
    const events = await Event.find({ isPublished: true }).populate(
      "organizer category"
    );
    return NextResponse.json({ events });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
