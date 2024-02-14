import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { UserModel } from "@/lib/models/user";
import "@/lib/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  // DB connection

  const user = new UserModel({ email, password: hashedPassword });
  const doc = await user.save();
  return Response.json({
    message: "User signed up successfully",
    user: { id: doc._id },
  });
}
