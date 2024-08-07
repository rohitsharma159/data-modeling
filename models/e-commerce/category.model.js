import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: Schema,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
