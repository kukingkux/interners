import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse;
  const token = request.cookies.get("auth_token");

  if (!token) {
    return response.redirect(
      new URL("http://localhost:8080/api/v1/auth/google/login", request.url)
    );
  }

  return response.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};
