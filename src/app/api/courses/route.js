// GET /api/courses
import Course from "@/models/Course";
import { connectDB } from "@/utils/db";

export async function GET(req) {
  await connectDB();

  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const tag = url.searchParams.get("tag");

  const filter = { isPublished: true };
  if (category) filter.category = category;
  if (tag) filter.tags = tag;

  const courses = await Course.find(filter)
    .populate("instructor", "name")
    .populate("category", "name")
    .sort({ createdAt: -1 });

  return Response.json(courses);
}

export async function POST(req) {
  await connectDB();

  const user = await getUserFromToken();
  if (!user || user.role !== "instructor") {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const course = await Course.create({
    ...body,
    instructor: user._id,
  });

  return Response.json(course);
}
