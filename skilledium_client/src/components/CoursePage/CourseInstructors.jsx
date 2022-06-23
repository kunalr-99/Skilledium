import React from "react";
import { BiGroup, BiCommentDots } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const CourseInstructors = () => {
  // const CourseInstructors = ({ courseDetails }) => {
  // const {
  //   instructorName,
  //   instructorProfileImg,
  //   totalStudents,
  //   noOfReviews,
  //   noOfCourses,
  //   avgRating,
  // } = courseDetails;
  const instData = {
    instructorName: "Kunal Raut",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 8103,
    noOfReviews: 1846,
    noOfCourses: 2,
    avgRating: 4.1,
  };
  const {
    instructorName,
    instructorProfileImg,
    totalStudents,
    noOfReviews,
    noOfCourses,
    avgRating,
  } = instData;

  return (
    <div className="mb-6 instructor-details">
      <div className="mb-4 text-lg font-bold">Instructors</div>
      <div className="p-4 rounded-lg instructor-details bg-brand-color-50">
        <div className="mb-1 text-sm font-bold">{instructorName} </div>
        <div className="mb-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          praesentium commodi similique officiis totam amet quae labore
        </div>
        <div className="flex items-center">
          <div className="rounded-full w-28">
            <img
              className="w-full rounded-full"
              src={instructorProfileImg}
              alt={instructorName}
            />
          </div>
          <div className="ml-8 desk:ml-12">
            <div className="flex space-x-8 text-gray-700">
              <div>
                <div className="flex items-center p-[6px] my-2 space-x-2 bg-white rounded-md">
                  <span className="text-2xl">
                    <BiGroup />
                  </span>
                  <div className="flex flex-col text-sm desk:text-base">
                    <span> Enrolled</span>
                    <span> {totalStudents}</span>
                  </div>
                </div>
                <div className="flex items-center p-[6px] my-2 space-x-2 bg-white rounded-md">
                  <span className="text-2xl">
                    <BsBookHalf />
                  </span>
                  <div className="flex flex-col text-sm desk:text-base">
                    <span> Courses</span>
                    <span> {noOfCourses}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center p-[6px] my-2 space-x-2 bg-white rounded-md">
                  <span className="text-2xl">
                    <BiCommentDots />
                  </span>
                  <div className="flex flex-col text-sm desk:text-base">
                    <span> Reviews</span>
                    <span> {noOfReviews}</span>
                  </div>
                </div>
                <div className="flex items-center p-[6px] my-2 space-x-2 bg-white rounded-md">
                  <span className="text-2xl text-yellow-400">
                    <AiFillStar />
                  </span>
                  <div className="flex flex-col text-sm desk:text-base">
                    <span> Rating</span>
                    <span> {avgRating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
