import React, { useState } from "react";
import axios from "axios";

const CourseForm = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseId: 0,
    bannerUrl: "",
    isFeatured: false,
    title: "",
    subtitle: "",
    description: "",
    hasEnrolled: false,
    language: "",
    students: 0,
    rating: 0,
    hours: 0,
    lectures: 0,
    price: 0,
    timeDuration: 0,
  });

  let key, val;
  const changeHandler = (e) => {
    key = e.target.name;
    val = e.target.value;
    setCourseDetails({
      ...courseDetails,
      [key]: val,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/courses/newcourse", courseDetails);
    setCourseDetails({
      courseId: 0,
      bannerUrl: "",
      isFeatured: false,
      title: "",
      subtitle: "",
      description: "",
      hasEnrolled: false,
      language: "",
      students: 0,
      rating: 0,
      hours: 0,
      lectures: 0,
      price: 0,
      timeDuration: 0,
    });
  };

  return (
    <div className="w-[600px] mx-auto my-4">
      <div>CourseForm</div>
      <div className="">
        <form className="flex flex-col" action="#" onSubmit={submitHandler}>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="courseId">Course Id</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="number"
              name="courseId"
              id="courseId"
              value={courseDetails.courseId}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="title">Course Title</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="text"
              name="title"
              id="title"
              value={courseDetails.title}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="bannerUrl">Course Banner Url</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="text"
              name="bannerUrl"
              id="bannerUrl"
              value={courseDetails.bannerUrl}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="subtitle">Course Subtitle</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="text"
              name="subtitle"
              id="subtitle"
              value={courseDetails.subtitle}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="description">Course Description</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="text"
              name="description"
              id="description"
              value={courseDetails.description}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="hours">Course Duration in hrs</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="number"
              name="hours"
              id="hours"
              value={courseDetails.hours}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="lectures">Course Lectures</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="number"
              name="lectures"
              id="lectures"
              value={courseDetails.lectures}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="timeDuration">Course Timespan in weeks</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="number"
              name="timeDuration"
              id="timeDuration"
              value={courseDetails.timeDuration}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="px-4 py-2 my-2 border border-gray-300">
            <label htmlFor="price">Course Price</label>
            <input
              className="p-2 ml-4 text-gray-700 bg-gray-100 rounded-lg w-[300px] focus:outline-none"
              type="number"
              name="price"
              id="price"
              required
              value={courseDetails.price}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              className="px-4 py-2 text-sm font-bold text-white rounded-md cursor-pointer bg-brand-color-400 hover:bg-brand-color-600"
              type="submit"
              value="Add course"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
