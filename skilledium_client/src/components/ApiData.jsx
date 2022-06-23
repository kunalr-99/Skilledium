import { CgInfinity } from "react-icons/cg";
import { HiCash } from "react-icons/hi";
import { GrDocker } from "react-icons/gr";
import { RiStockFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  SiKubernetes,
  SiAndroidstudio,
  SiJava,
  SiKotlin,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export const ApiData = [
  {
    courseId: 1,
    bannerUrl: "/images/webdevBanner1.png",
    isFeatured: true,
    title: "FrontEnd Web Development",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: false,
    tags: [
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
    ],
    language: "English",
    students: 104,
    rating: 4.0,
    hours: 62,
    lectures: 31,
    price: 2999,
    timeDuration: 9,
    instructorName: "Kunal Raut",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 8103,
    noOfReviews: 1846,
    noOfCourses: 2,
    avgRating: 4.1,
  },
  {
    courseId: 2,
    bannerUrl: "https://i.ytimg.com/vi/1pQXt84HbDY/maxresdefault.jpg",
    isFeatured: true,
    title: "Software Dev Masterstroke",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: false,
    tags: [
      {
        tagIcon: <SiJava />,
        tagColor: "blue",
        tagName: "Java",
      },
      {
        tagIcon: <SiKotlin />,
        tagColor: "purple",
        tagName: "Kotlin",
      },
    ],
    language: "English",
    students: 91,
    rating: 4.5,
    hours: 30,
    lectures: 15,
    price: 1499,
    timeDuration: 4,
    instructorName: "Vidyadhar Jogi",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 9612,
    noOfReviews: 2195,
    noOfCourses: 2,
    avgRating: 4.3,
  },
  {
    courseId: 3,
    bannerUrl: "https://i.ytimg.com/vi/fT_98Tfr9k0/maxresdefault.jpg",
    isFeatured: true,
    title: "Stock Market Trading Mastery",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: true,
    tags: [
      {
        tagIcon: <RiStockFill />,
        tagColor: "cyan",
        tagName: "Stocks",
      },
      {
        tagIcon: <RiMoneyDollarCircleFill />,
        tagColor: "green",
        tagName: "Finance",
      },
    ],
    language: "English",
    students: 162,
    rating: 4.4,
    hours: 35,
    lectures: 20,
    price: 1999,
    instructorName: "Bhavesh Kamble",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 10175,
    noOfReviews: 1998,
    noOfCourses: 2,
    avgRating: 4.1,
  },
  {
    courseId: 4,
    bannerUrl:
      "https://previews.123rf.com/images/varijanta/varijanta1603/varijanta160300072/54344048-.jpg",
    isFeatured: false,
    title: "Android Development Essentials",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: false,
    tags: [
      {
        tagIcon: <SiJava />,
        tagColor: "blue",
        tagName: "Java",
      },
      {
        tagIcon: <SiKotlin />,
        tagColor: "purple",
        tagName: "Kotlin",
      },
      {
        tagIcon: <SiAndroidstudio />,
        tagColor: "green",
        tagName: "Android Studio",
      },
    ],
    language: "English",
    students: 150,
    rating: 3.9,
    hours: 40,
    lectures: 30,
    price: 2499,
    instructorName: "Vidyadhar Jogi",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 9612,
    noOfReviews: 2195,
    noOfCourses: 2,
    avgRating: 4.3,
  },
  {
    courseId: 5,
    bannerUrl:
      "https://indiater.com/wp-content/uploads/2019/03/online-education-courses-sale-infographics-banner-design.jpg",
    isFeatured: false,
    title: "DevOps Engineers Masterclass",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: true,
    tags: [
      {
        tagIcon: <SiKubernetes />,
        tagColor: "purple",
        tagName: "Kubernetes",
      },
      {
        tagIcon: <GrDocker />,
        tagColor: "blue",
        tagName: "Docker",
      },
      {
        tagIcon: <CgInfinity />,
        tagColor: "orange",
        tagName: "CICD",
      },
    ],
    language: "English",
    students: 76,
    rating: 3.5,
    hours: 15,
    lectures: 10,
    price: 999,
    instructorName: "Kunal Raut",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 8103,
    noOfReviews: 1846,
    noOfCourses: 2,
    avgRating: 4.1,
  },
  {
    courseId: 6,
    bannerUrl:
      "https://graphicriver.img.customer.envatousercontent.com/files/298351086/preview_14903203.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=26cde948c15d9fcbc922d48326a59c9d",
    isFeatured: false,
    title: "Options - Derivatives Trading",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at!",
    hasEnrolled: false,
    tags: [
      {
        tagIcon: <HiCash />,
        tagColor: "orange",
        tagName: "Options",
      },
      {
        tagIcon: <RiMoneyDollarCircleFill />,
        tagColor: "green",
        tagName: "Finance",
      },
    ],
    language: "English",
    students: 64,
    rating: 3.8,
    hours: 60,
    lectures: 30,
    price: 2999,
    instructorName: "Bhavesh Kamble",
    instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    totalStudents: 10175,
    noOfReviews: 1998,
    noOfCourses: 2,
    avgRating: 4.0,
  },
];
