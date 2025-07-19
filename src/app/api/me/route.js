import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!token || !JWT_SECRET) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ isLoggedIn: true, user: decoded });
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }
}
