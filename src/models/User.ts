import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../utils/types";

const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    profilePicture: {
      type: String,
      trim: true,
    },
    googleId: {
      type: String,
      required: [true, "Google ID is required"],
      unique: true,
    },
    slackId: {
      type: String,
      unique: true,
      sparse: true,
    },
    slackToken: {
      type: String,
    },
    slackChannel: {
      id: String,
      name: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
