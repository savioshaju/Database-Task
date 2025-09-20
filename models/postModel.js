import mongoose, { Schema,model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;