import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    srno: Number,
    title: String,
    imgUrl: String,
    desc: String,
    likeCount: Number,
    comments: Number,
    shares: Number,
    saves: Number,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", PostSchema);

export default PostModel;
