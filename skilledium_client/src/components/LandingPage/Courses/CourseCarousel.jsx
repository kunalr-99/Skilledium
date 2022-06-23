import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../Carousels/Arrows";
import CourseCard from "./CourseCard";
import { FetchCoursesApi } from "../../FetchApi";

const CourseCarousel = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function Api() {
      const arr = await FetchCoursesApi();
      setApiData(arr.data.msg);
    }
    Api();
  }, []);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1280px] mx-auto my-8">
      <div className="flex justify-center w-full text-[40px] font-extrabold text-gray-700 courses-header mb-4">
        Upcoming Courses !
      </div>
      <Slider {...settings}>
        {apiData.map((data, i) => (
          <CourseCard key={i} apiData={data} />
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
