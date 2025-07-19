import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Category from "@/models/Category";

// POST /api/categories/seed - Seed initial categories
export async function POST() {
  try {
    await connectDB();

    // Check if categories already exist
    const existingCategories = await Category.find({});
    if (existingCategories.length > 0) {
      return NextResponse.json(
        { message: "Categories already exist" },
        { status: 200 }
      );
    }

    // Initial categories for Edventry
    const initialCategories = [
      {
        name: "Web Development",
        slug: "web-development",
        description: "Learn to build modern web applications",
        type: "course"
      },
      {
        name: "Data Science",
        slug: "data-science",
        description: "Master data analysis and machine learning",
        type: "course"
      },
      {
        name: "Mobile Development",
        slug: "mobile-development",
        description: "Create apps for iOS and Android",
        type: "course"
      },
      {
        name: "Design",
        slug: "design",
        description: "Learn UI/UX and graphic design",
        type: "course"
      },
      {
        name: "Programming",
        slug: "programming",
        description: "Master programming languages and concepts",
        type: "course"
      },
      {
        name: "Business",
        slug: "business",
        description: "Business management and entrepreneurship",
        type: "course"
      },
      {
        name: "Marketing",
        slug: "marketing",
        description: "Digital marketing and growth strategies",
        type: "course"
      },
      {
        name: "Finance",
        slug: "finance",
        description: "Financial management and investment",
        type: "course"
      },
      {
        name: "Health & Fitness",
        slug: "health-fitness",
        description: "Personal health and fitness training",
        type: "course"
      },
      {
        name: "Music",
        slug: "music",
        description: "Learn music theory and production",
        type: "course"
      },
      {
        name: "Photography",
        slug: "photography",
        description: "Master photography techniques",
        type: "course"
      },
      {
        name: "Language Learning",
        slug: "language-learning",
        description: "Learn new languages",
        type: "course"
      }
    ];

    // Insert categories
    const categories = await Category.insertMany(initialCategories);

    return NextResponse.json(
      { 
        message: "Categories seeded successfully", 
        count: categories.length,
        categories 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error seeding categories:", error);
    return NextResponse.json(
      { error: "Failed to seed categories" },
      { status: 500 }
    );
  }
} 