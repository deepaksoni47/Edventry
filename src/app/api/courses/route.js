import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Course from "@/models/Course";
import Category from "@/models/Category";
import Lesson from "@/models/Lesson";

// GET /api/courses - Get all courses
export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find({})
      .populate('instructor', 'name email')
      .populate('category', 'name')
      .populate('lessons', 'title duration')
      .sort({ createdAt: -1 });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

// POST /api/courses - Create a new course
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      title,
      description,
      price,
      categoryId,
      thumbnail,
      tags,
      curriculum,
      instructorId
    } = body;

    // Validation
    if (!title || !description || !categoryId || !instructorId) {
      return NextResponse.json(
        { error: "Title, description, category, and instructor are required" },
        { status: 400 }
      );
    }

    // Check if category exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Create the course
    const course = new Course({
      title: title.trim(),
      description: description.trim(),
      instructor: instructorId,
      price: price || 0,
      category: categoryId,
      thumbnail: thumbnail || "",
      tags: tags || [],
      isPublished: false
    });

    await course.save();

    // Create lessons if curriculum is provided
    if (curriculum && curriculum.length > 0) {
      const lessons = [];
      
      for (let weekIndex = 0; weekIndex < curriculum.length; weekIndex++) {
        const week = curriculum[weekIndex];
        
        for (let lessonIndex = 0; lessonIndex < week.lessons.length; lessonIndex++) {
          const lessonData = week.lessons[lessonIndex];
          
          if (lessonData.title && lessonData.content) {
            const lesson = new Lesson({
              title: lessonData.title.trim(),
              content: lessonData.content.trim(),
              videoUrl: lessonData.videoUrl || "",
              duration: lessonData.duration || 0,
              course: course._id,
              order: lessons.length + 1,
              isFree: lessonData.isFree || false
            });
            
            await lesson.save();
            lessons.push(lesson._id);
          }
        }
      }

      // Update course with lesson IDs
      course.lessons = lessons;
      await course.save();
    }

    // Populate the response
    const populatedCourse = await Course.findById(course._id)
      .populate('instructor', 'name email')
      .populate('category', 'name')
      .populate('lessons', 'title duration');

    return NextResponse.json(
      { 
        message: "Course created successfully", 
        course: populatedCourse 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
