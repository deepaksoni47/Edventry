import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const publicPaths = ["/", "/login", "/signup"];
const apiPrefix = "/api/auth";

// Allow public and auth API routes
function isPublicPath(path) {
  return publicPaths.includes(path) || path.startsWith(apiPrefix);
}

function getRequiredRoles(path) {
  if (path.startsWith("/admin")) return ["admin"];
  if (path.startsWith("/providers")) return ["instructor", "admin"];
  if (path.startsWith("/student")) return ["student"];
  return null;
}

async function verifyJWT(token) {
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
  return await jwtVerify(token, secret);
}

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  if (isPublicPath(path)) return NextResponse.next();

  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const { payload } = await verifyJWT(token);
    const requiredRoles = getRequiredRoles(path);

    if (requiredRoles && !requiredRoles.includes(payload.role)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo-edventry.svg).*)"],
};
