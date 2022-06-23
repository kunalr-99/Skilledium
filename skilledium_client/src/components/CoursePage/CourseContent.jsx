import React from "react";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { BsDot, BsChevronDown } from "react-icons/bs";
import { SiGoogletranslate } from "react-icons/si";
import { RiShoppingBag3Line } from "react-icons/ri";

const CourseContent = ({ courseDetails, tags }) => {
  const {
    bannerUrl,
    isFeatured,
    title,
    description,
    hasEnrolled,
    hours,
    students,
    lectures,
    rating,
  } = courseDetails;

  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="relative course-preview mt-6 mb-4 lg:w-[34rem] lg:h-[17rem] desk:w-[44rem] desk:h-[22rem] rounded-2xl">
            <img
              className="object-cover w-full h-full rounded-2xl"
              src={bannerUrl}
              alt={title}
            />
            <span
              className={`${
                isFeatured ? "block" : "hidden"
              } absolute top-0 right-0 text-[11px] bg-blue-600 text-white uppercase px-4 py-2 tracking-wider rounded-bl-xl rounded-tr-2xl`}
            >
              Featured
            </span>
          </div>
          <div className="flex mx-4 mb-4 space-x-4 text-lg text-gray-700 tags">
            {tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center pl-3 pr-4 space-x-1 bg-gray-200 rounded-3xl"
                >
                  <span className={`text-${tag.tagColor}-500`}>
                    {tag.tagIcon}
                  </span>
                  <span className="text-[11px]">{tag.tagName}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mx-4 mb-4 md:space-x-12 metrics">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex items-center space-x-1">
                <span className="text-blue-500">
                  <SiGoogletranslate />
                </span>
                <span> English</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>
                  <BiGroup />
                </span>
                <span> {students} Enrolled</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-lg text-yellow-400">
                  <AiFillStar />
                </span>
                <span> {rating}</span>
              </div>
            </div>
            <div className="flex space-x-1 items-center text-[12px] bg-secondary-color-400 font-bold text-white px-4 py-[6px] rounded-md">
              <span>Rate Now</span>
            </div>
          </div>
          <div className="flex flex-col mb-4 ml-4 mr-12 md:mb-6 course-heading">
            <div className="flex items-center justify-between w-full mb-1">
              <div className="font-bold">
                <span>{title}</span>
              </div>
              <div className="text-2xl text-brand-color-400">
                <a href="www.skilledium.com">
                  <RiShoppingBag3Line />
                </a>
              </div>
            </div>
            <div className="flex space-x-2 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="">
                  <AiOutlineClockCircle />
                </span>
                <span> {hours} hrs</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="">
                  <BsDot />
                </span>
                <span> {lectures} lectures</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4 ml-4 mr-12 md:mb-0 course-description">
            <div className="flex items-center mb-2 space-x-3 font-semibold">
              <span>Course Description</span>
              <a href="www.skilledium.com" className="text-sm">
                <BsChevronDown />
              </a>
            </div>
            <div className="ml-2 text-sm text-gray-600">{description}</div>
          </div>
          <div className="mb-4 text-center">
            <a
              className="px-20 py-2 text-base font-bold tracking-wider text-white uppercase rounded-md md:hidden bg-secondary-color-400"
              href="www.skilledium.com"
            >
              {hasEnrolled ? `Start Watching` : `Enroll for Free`}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
