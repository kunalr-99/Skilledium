import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ apiData, key }) => {
  const { courseId, bannerUrl, title, price, description } = apiData;
  return (
    <>
      <Link to={`/courses/${courseId}`}>
        <div
          key={key}
          className="p-4 mx-8 my-8 transition ease-in-out rounded-lg shadow-xl duration-[800ms] hover:shadow-lg bg-gradient-to-b from-blue-400 via-cyan-200 to-transparent hover:scale-105"
        >
          <div className="w-full h-48 rounded-xl">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={bannerUrl}
              alt={title}
            />
          </div>
          <div className="px-2 my-4">
            <div className="flex items-center justify-between w-full mb-2">
              <div className="w-4/5 font-semibold text-[#303160]">
                <span>{title}</span>
              </div>
              <div className="px-2 py-1 text-xs tracking-wide text-white rounded-md bg-brand-color-400">
                $ <span className="text-sm font-bold">{price}</span>
              </div>
            </div>
            <div className="mb-2 text-[13px]">
              <span>{description}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
