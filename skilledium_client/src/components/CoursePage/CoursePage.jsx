import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "./CourseContent";
import CourseRemarks from "./CourseRemarks";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FetchSpecificCourseApi } from "../FetchApi";

const CoursePage = () => {
  const { courseId } = useParams();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function Api() {
      const arr = await FetchSpecificCourseApi(courseId);
      setApiData(arr.data.msg);
    }
    Api();
  }, [courseId]);
  console.log(apiData);
  const tags = [
    {
      tagIcon: <SiHtml5 />,
      tagColor: "red",
      tagName: "HTML",
    },
    {
      tagIcon: <SiCss3 />,
      tagColor: "blue",
      tagName: "CSS",
    },
    {
      tagIcon: <SiJavascript />,
      tagColor: "yellow",
      tagName: "JavaScript",
    },
  ];
  return (
    <>
      <div className="lg:block w-[95%] mobile:w-[450px] md:w-[700px] lg:w-[1000px] desk:w-[1240px] mx-auto mb-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[58%] mb-8">
            <CourseContent courseDetails={apiData} tags={tags} />
          </div>
          <div className="w-full md:w-[42%]">
            <CourseRemarks courseDetails={apiData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
