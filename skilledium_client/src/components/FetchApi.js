import axios from "axios";

export async function FetchCoursesApi() {
  try {
    return await axios.get("http://localhost:4000/courses");
  } catch (error) {
    console.log(error.message);
  }
}

export async function FetchSpecificCourseApi(courseId) {
  try {
    return await axios.get(`http://localhost:4000/courses/${courseId}`);
  } catch (error) {
    console.log(error.message);
  }
}
