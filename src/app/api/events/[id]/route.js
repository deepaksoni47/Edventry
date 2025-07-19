// src/app/api/events/[id]/route.js

export async function GET(req, { params }) {
  await connectDB();

  try {
    const event = await Event.findById(params.id).populate(
      "organizer category"
    );
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event });
  } catch (err) {
    return NextResponse.json(
      { error: "Error fetching event" },
      { status: 500 }
    );
  }
}
export async function PATCH(req, { params }) {
  await connectDB();

  try {
    const tokenUser = await getUserFromToken(req);

    const event = await Event.findById(params.id);
    if (!event)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (
      event.organizer.toString() !== tokenUser.id &&
      tokenUser.role !== "admin"
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updates = await req.json();
    Object.assign(event, updates);
    await event.save();

    return NextResponse.json({ event });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
  await connectDB();

  try {
    const tokenUser = await getUserFromToken(req);
    const event = await Event.findById(params.id);

    if (!event)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (
      event.organizer.toString() !== tokenUser.id &&
      tokenUser.role !== "admin"
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await event.deleteOne();
    return NextResponse.json({ message: "Event deleted" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
