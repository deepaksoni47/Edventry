import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Category from "@/models/Category";

// GET /api/categories - Get all categories
export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({})
      .sort({ name: 1 });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST /api/categories - Create a new category
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, description, type } = body;

    // Validation
    if (!name) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Category already exists" },
        { status: 409 }
      );
    }

    // Create slug from name
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const category = new Category({
      name: name.trim(),
      slug,
      description: description?.trim() || "",
      type: type || "both"
    });

    await category.save();

    return NextResponse.json(
      { 
        message: "Category created successfully", 
        category 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
} 