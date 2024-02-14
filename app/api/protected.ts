import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export default function Handler(req: NextRequest) {
  const token = req.headers.get("authorization") || "";
  const decoded = jwt.verify(token, "SECRET_KEY");

  if (!decoded) {
    return Response.json(
      { message: "invalid user" },
      {
        status: 401,
      }
    );
  }
}
