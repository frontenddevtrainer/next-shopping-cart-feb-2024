import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { UserModel } from "@/lib/models/user";
import jwt from "jsonwebtoken";
import "@/lib/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const user = await UserModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
        expiresIn: "1h",
      });
      return Response.json({
        message: "User logged in",
        user: {
          token,
        },
      });
    }

    return Response.json({ message: "Invalid credentials" });
  } catch (error) {
    return Response.json({ message: "Internal server error" });
  }
}
