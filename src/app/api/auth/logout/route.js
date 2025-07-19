// app/api/auth/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  // Clear the token cookie by setting it to empty and expiring it immediately
  return NextResponse.json(
    { message: "Logout successful" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`,
      },
    }
  );
}
