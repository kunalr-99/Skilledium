import CourseModel from "../models/CourseModel.js";

// Creating / Adding new course
export const addCourse = async (req, res) => {
  try {
    const courseDetails = req.body;
    const newUser = await CourseModel.create(courseDetails);
    return res.status(201).json({ msg: newUser });
  } catch (error) {
    return res.status(500).json({ msg: `${error.message}` });
  }
};

// Rendering all Existing Courses
export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await CourseModel.find();
    return res.status(200).json({ msg: allCourses });
  } catch (error) {
    return res.status(500).json({ msg: `${error.message}` });
  }
};

// Getting a specific Course based on id
export const getRequiredCourse = async (req, res) => {
  try {
    // const { courseId } = req.params;
    // const requiredCourse = await CourseModel.find({
    //   courseId: parseInt(courseId),
    // });
    const { courseId } = req.params;
    const num = parseInt(courseId);
    const requiredCourse = await CourseModel.findOne({ courseId: num });
    return res.status(200).json({ msg: requiredCourse });
  } catch (error) {
    return res.status(500).json({ msg: `${error.message}` });
  }
};

// Deleting a course
export const deleteSpecificCourse = async (req, res) => {
  try {
    const { courseid } = req.params;
    const deletedCourse = await CourseModel.findOneAndDelete({
      id: parseInt(courseid),
    });
    return res.status(200).json({ msg: deletedCourse });
  } catch (error) {
    return res.status(500).json({ msg: `${error.message}` });
  }
};
