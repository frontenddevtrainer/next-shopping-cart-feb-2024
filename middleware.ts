import { NextRequest, NextResponse } from "next/server";
import { verifyjwt } from "@/lib/verifytoken";
export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    const isLoggedIn = token && (await verifyjwt(token));

    if (isLoggedIn) {
      return NextResponse.next();
    } else {
      return Response.json({ message: "hello" });
    }
  } catch (error) {
    return Response.json({ message: "hello" });
  }
}

export const config = {
  matcher: ["/orders"],
};
