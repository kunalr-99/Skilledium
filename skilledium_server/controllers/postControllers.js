import PostModel from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await PostModel.create(postData);
    return res.status(201).json({ msg: newPost });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await PostModel.find();
    return res.status(201).json({ msg: allPosts });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getRequiredPosts = async (req, res) => {
  try {
    const { srno } = req.params;
    const num = parseInt(srno);
    const requiredPost = await PostModel.findOne({ srno: num });
    return res.status(201).json({ msg: requiredPost });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
