import React from "react";
import CourseInstructors from "./CourseInstructors";
import CourseReviews from "./CourseReviews";

const CourseRemarks = ({ courseDetails }) => {
  const { title, subtitle, hasEnrolled } = courseDetails;

  return (
    <>
      <div className="flex flex-col">
        <div className="hidden md:block course-enroll w-full lg:h-[17rem] desk:h-[22rem] mt-12">
          <div className="text-[32px] desk:text-[40px] mb-6 desk:mt-6 font-semibold text-gray-800 course-title">
            <span>{title}</span>
          </div>
          <div className="mb-10 text-sm desk:text-base course-subtitle">
            <span>{subtitle}</span>
          </div>
          <div className="text-center">
            <a
              className="px-20 py-3 text-base font-bold tracking-wider text-white uppercase rounded-md desk:px-36 bg-secondary-color-400"
              href="www.skilledium.com"
            >
              {hasEnrolled ? `Start Watching` : `Enroll for Free`}
            </a>
          </div>
        </div>
        <CourseInstructors />
        <CourseReviews courseDetails={courseDetails} />
      </div>
    </>
  );
};

export default CourseRemarks;
