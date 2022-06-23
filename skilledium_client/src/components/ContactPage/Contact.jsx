import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="contact-page max-w-[350px] min-w-[350px] md:max-w-[700px] md:min-w-[700px] lg:max-w-[1024px] lg:min-w-[1024px] mx-auto">
        <div className="w-full text-center">
          <div className="mt-8 mb-4 text-3xl font-bold">Contact Us</div>
          <div className="mb-8 text-sm">
            Have a query or remark? Just write us a message!
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full lg:h-[320px] justify-evenly">
          <div className="w-full h-full px-6 py-4 mb-8 md:mr-4 lg:mr-0 md:w-1/2 lg:w-1/3 rounded-xl contact-details bg-gradient-to-br from-brand-color-300 to-purple-500 lg:mb-0">
            <div className="mb-6 text-lg font-bold text-center text-white">
              Contact information
            </div>
            <div>
              <div className="flex items-center px-5 py-4 mb-4 bg-white rounded-lg">
                <div className="p-2 mr-3 text-gray-500 bg-gray-200 rounded-xl">
                  <GoLocation />
                </div>
                <div className="text-[10px]">
                  <div className="font-bold">Address</div>
                  <div>3A/65 Worli, Mumbai - 30</div>
                </div>
              </div>
              <div className="flex items-center px-5 py-4 mb-4 bg-white rounded-lg">
                <div className="p-2 mr-3 text-gray-500 bg-gray-200 rounded-xl">
                  <BsTelephone />
                </div>
                <div className="text-[10px]">
                  <div className="font-bold">Contact Number</div>
                  <div>+91 8097681109</div>
                </div>
              </div>
              <div className="flex items-center px-5 py-4 mb-2 bg-white rounded-lg">
                <div className="p-2 mr-3 text-gray-500 bg-gray-200 rounded-xl">
                  <AiOutlineMail />
                </div>
                <div className="text-[10px]">
                  <div className="font-bold">Email Id</div>
                  <div>queries@skilledium.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:w-1/2 lg:w-2/3 contact-form">
            <form
              action="#"
              method="post"
              className="flex flex-col justify-center w-full h-full text-sm"
            >
              <div className="flex flex-col mb-4 lg:space-x-2 lg:flex-row">
                <input
                  className="w-full lg:w-[45%] px-4 py-3 lg:mb-0 mb-4 lg:mx-4 bg-brand-color-50 text-brand-color-700 rounded-md focus:outline-none"
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <input
                  className="w-full lg:w-[45%] px-4 py-3 bg-brand-color-50 text-brand-color-700 rounded-md focus:outline-none"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col mb-4 lg:space-x-2 lg:flex-row">
                <input
                  className="w-full lg:w-[45%] px-4 py-3 lg:mb-0 mb-4 lg:mx-4 bg-brand-color-50 text-brand-color-700 rounded-md focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  required
                />
                <input
                  className="w-full lg:w-[45%] px-4 py-3 bg-brand-color-50 text-brand-color-700 rounded-md focus:outline-none"
                  type="number"
                  name="phone"
                  placeholder="+91 XXX XXX XXXX"
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="w-full lg:w-[93.5%] px-4 py-3 lg:mx-4 bg-brand-color-50 text-brand-color-700 rounded-md focus:outline-none"
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  placeholder="Enter your query here ..."
                  required
                ></textarea>
              </div>
              <div>
                <span className="px-3 py-2 text-xs font-semibold tracking-wider text-white rounded-lg w-full lg:w-[93.5%] lg:mx-4 bg-gradient-to-r from-brand-color-300 via-brand-color-500 to-purple-600 cursor-pointer flex items-center justify-center space-x-2">
                  <span className="text-lg">
                    <RiSendPlaneFill />
                  </span>
                  <span>Send Message</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
