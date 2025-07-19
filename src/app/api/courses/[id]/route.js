// GET /api/courses/[id]
import Course from "@/models/Course";
import { connectDB } from "@/utils/db";

export async function GET(req, { params }) {
  await connectDB();
  const course = await Course.findById(params.id)
    .populate("instructor", "name email")
    .populate("category", "name")
    .populate("lessons")
    .populate("reviews");

  if (!course) return new Response("Course not found", { status: 404 });

  return Response.json(course);
}

export async function PATCH(req, { params }) {
  await connectDB();
  const user = await getUserFromToken(req);

  if (!user) return new Response("Unauthorized", { status: 401 });

  const course = await Course.findById(params.id);
  if (!course) return new Response("Course not found", { status: 404 });

  // Allow only instructor who owns it or admin
  if (
    course.instructor.toString() !== user._id.toString() &&
    user.role !== "admin"
  ) {
    return new Response("Forbidden", { status: 403 });
  }

  const updates = await req.json();
  Object.assign(course, updates);

  await course.save();

  return Response.json(course);
}
export async function DELETE(req, { params }) {
  await connectDB();
  const user = await getUserFromToken(req);

  if (!user) return new Response("Unauthorized", { status: 401 });

  const course = await Course.findById(params.id);
  if (!course) return new Response("Course not found", { status: 404 });

  if (
    course.instructor.toString() !== user._id.toString() &&
    user.role !== "admin"
  ) {
    return new Response("Forbidden", { status: 403 });
  }

  await course.deleteOne();

  return Response.json({ message: "Course deleted successfully" });
}
