import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Define paths that require admin or instructor roles
const protectedRoutes = [
  { path: "/api/admin/*", role: "admin" },
  { path: "/api/instructor/*", role: "instructor" },
];

// Secret from .env
const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const match = protectedRoutes.find((route) =>
    pathname.startsWith(route.path)
  );

  // If not a protected route, continue normally
  if (!match) return NextResponse.next();

  const token = request.headers.get("authorization")?.split(" ")[1];

  if (!token || !JWT_SECRET) {
    return NextResponse.json(
      { error: "Unauthorized or missing token" },
      { status: 401 }
    );
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    if (payload.role !== match.role) {
      return NextResponse.json(
        { error: `Access denied: ${match.role} only.` },
        { status: 403 }
      );
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}

// Tell Next.js which routes the middleware should apply to
export const config = {
  matcher: ["/api/admin/:path*", "/api/instructor/:path*"],
};
