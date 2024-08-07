import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  googleId: string;
  slackId?: string;
  slackToken?: string;
  slackChannel?: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
