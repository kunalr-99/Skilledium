import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    courseId: {
      type: Number,
      required: [true, "Enter a valid id for your course"],
    },
    bannerUrl: String,
    isFeatured: {
      type: Boolean,
      default: false,
    },
    title: String,
    subtitle: String,
    description: String,
    hasEnrolled: {
      type: Boolean,
      default: false,
    },
    //   tags: [
    //     {
    //     //   tagIcon: <SiHtml5 />,
    //       tagColor: "red",
    //       tagName: "HTML",
    //     },
    //     {
    //       tagIcon: <SiCss3 />,
    //       tagColor: "blue",
    //       tagName: "CSS",
    //     },
    //     {
    //       tagIcon: <SiJavascript />,
    //       tagColor: "yellow",
    //       tagName: "JavaScript",
    //     },
    //   ],
    language: String,
    students: Number,
    rating: Number,
    hours: Number,
    lectures: Number,
    price: Number,
    timeDuration: Number,
    //   instructorName: "Kunal Raut",
    //   instructorProfileImg: "/images/Blake-profile-photo-square.jpg",
    //   totalStudents: 8103,
    //   noOfReviews: 1846,
    //   noOfCourses: 2,
    //   avgRating: 4.1,
  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("course", CourseSchema);

export default CourseModel;
