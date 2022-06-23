import express from "express";
import {
  createPost,
  getAllPosts,
  getRequiredPosts,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:srno", getRequiredPosts);

export default router;
