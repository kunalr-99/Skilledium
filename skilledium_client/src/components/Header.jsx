import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="relative">
        <div className="sticky shadow-md">
          <div className="header h-16 mx-auto max-w-[400px] md:max-w-[700px] lg:max-w-[1280px] flex justify-between items-center text-sm">
            <div className="flex items-center space-x-16 header-left">
              <div className="w-24 header-logo">
                <a href="/">
                  <img
                    className="w-full"
                    src="/images/skilledium.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="hidden space-x-6 font-semibold lg:block header-nav text-brand-color-100">
                {/* <BrowserRouter> */}
                <span className="font-bold header-nav-link text-brand-color-700">
                  {/* <Link className="px-2 py-1" to={`/`}>
                      Home
                    </Link> */}
                  <a className="px-2 py-1" href="www.google.com">
                    Home
                  </a>
                </span>
                <span className="header-nav-link ">
                  {/* <Link className="px-2 py-1" to={`/courses`}>
                      Courses
                    </Link> */}
                  <a className="px-2 py-1" href="www.google.com">
                    Courses
                  </a>
                </span>
                <span className="header-nav-link ">
                  {/* <Link className="px-2 py-1" to={`/pricing`}>
                      Pricing
                    </Link> */}
                  <a className="px-2 py-1" href="www.google.com">
                    Pricing
                  </a>
                </span>
                <span className="header-nav-link ">
                  {/* <Link className="px-2 py-1" to={`/about`}>
                      Our story
                    </Link> */}
                  <a className="px-2 py-1" href="www.google.com">
                    Our Story
                  </a>
                </span>
                {/* </BrowserRouter> */}
              </div>
            </div>
            <div className="flex items-center space-x-8 header__right">
              <div className="hidden space-x-6 md:flex header-socials">
                <div className="header-socials-link linkedin">
                  <a className="text-blue-500" href="www.linkedin.com">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="header-socials-link instagram">
                  <a className="text-purple-600" href="www.instagram.com">
                    <GrInstagram />
                  </a>
                </div>
                <div className="header-socials-link facebook">
                  <a className="text-blue-800" href="www.facebook.com">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 header-cta">
                <div className="header-cta-signup">
                  <span>
                    <a
                      className="px-4 py-2 font-bold border rounded-md text-brand-color-500 border-brand-color-300"
                      href="/addcourse"
                    >
                      Sign Up
                    </a>
                  </span>
                </div>
                <div className="header-cta-contact">
                  <span>
                    <a
                      className="px-4 py-[9px] rounded-md bg-brand-color-400 text-white"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
