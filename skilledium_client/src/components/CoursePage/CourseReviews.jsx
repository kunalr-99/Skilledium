import React from "react";
import { AiFillStar, AiFillLike, AiOutlineDislike } from "react-icons/ai";

const CourseReviews = ({ courseDetails }) => {
  //   const { noOfReviews } = courseDetails;

  return (
    <>
      <div className="text-xs border-t-[0.5px] border-gray-200 px-4">
        <div className="flex items-center justify-between my-4">
          <div>
            <div className="font-bold">Overall Rating</div>
            <div className="flex items-center space-x-2">
              <span className="text-base text-brand-color-400">4.2</span>
              <span className="flex items-center text-brand-color-400">
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span className="text-gray-300">
                  <AiFillStar />
                </span>
              </span>
              <span className="text-[10px] tracking-widest">3 votes</span>
            </div>
          </div>
          <div>
            <span className="p-2 font-bold border rounded-sm text-brand-color-400 border-brand-color-400">
              Leave Review
            </span>
          </div>
        </div>
        <span className="flex mb-4 items-center justify-center w-[35%] mx-auto rounded-md py-2 bg-gray-200">
          <span className="text-[10px] text-gray-500">Sort by</span>
          <select
            name="filterReviews"
            id=""
            className="text-gray-700 bg-gray-200 focus:outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="mostLiked">Most Liked</option>
          </select>
        </span>
        <div className="flex items-start">
          <div className="w-[12%]">
            <img
              className="mr-2 rounded-full w-[34px]"
              src="/images/Blake-profile-photo-square.jpg"
              alt="User Profile img"
            />
          </div>
          <div className="w-[88%]">
            <div className="mb-[2px]">Tanmay Bhatt</div>
            <div className="flex mb-3 space-x-1">
              <span className="flex items-center text-brand-color-400">
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span className="text-gray-300">
                  <AiFillStar />
                </span>
              </span>
              <span className="text-[9px] tracking-widest">10 days ago</span>
            </div>
            <div className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              doloremque laudantium nihil aspernatur mollitia eum reiciendis
              inventore ipsum, architecto velit excepturi voluptate perspiciatis
              in omnis modi illo fugit vero magni!
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-sm">
                  <AiFillLike />
                </span>
                <span> 14</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm">
                  <AiOutlineDislike />
                </span>
                <span> 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseReviews;
