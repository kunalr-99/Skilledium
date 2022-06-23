import express from "express";
import {
  addCourse,
  deleteSpecificCourse,
  getAllCourses,
  getRequiredCourse,
} from "../controllers/courseControllers.js";

const router = express.Router();

router.post("/newcourse", addCourse);

router.get("/", getAllCourses);
router.get("/:courseId", getRequiredCourse);

router.delete("/:courseid", deleteSpecificCourse);

export default router;
