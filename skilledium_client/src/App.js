import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import CourseCarousel from "./components/LandingPage/Courses/CourseCarousel";
import CoursePage from "./components/CoursePage/CoursePage";
import Contact from "./components/ContactPage/Contact";
import CourseForm from "./components/CourseForm/CourseForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CourseCarousel />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addcourse" element={<CourseForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
