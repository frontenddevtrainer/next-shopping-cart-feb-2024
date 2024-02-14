import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_on: { type: Date, default: new Date() },
});

const UserModel =
  mongoose.models.users || model("users", UserSchema, "users");

export { UserModel, UserSchema };
