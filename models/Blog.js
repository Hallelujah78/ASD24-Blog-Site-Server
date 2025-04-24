import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Blog", BlogSchema);
