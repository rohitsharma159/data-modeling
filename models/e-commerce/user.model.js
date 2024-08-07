import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const userSchema = new mongoode.Schema(
  {
    username: {
      type: String,
      rerquired: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      rerquired: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
