import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import Point from "./Point";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

  return (
    <div className="flex mt-[50px] flex-col w-full h-auto">
      <div className="bg-amber-500 p-[20px] py-[30px] lg:px-[50px] flex justify-center items-center">
        <div className="bg-white tracking-wide drop-shadow-xl shadow-[0px_4px_10px_#00000026] p-[30px] py-[40px] grid-cols-1 grid lg:grid-cols-2 gap-4 w-[95%] sm:w-[90%]">
          <p className="lg:text-3xl text-xl font-medium w-full sm:w-[60%] lg:font-[590]">
            SUBSCRIBE TO OUR NEWSLETTER!
          </p>
          <div className="font-medium w-full flex flex-col gap-4 text-[16px] text-gray-500">
            <p>Get notified about delicious deals and never miss a tasty offer!</p>
            <form action="#">
              <div className="flex drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                <div className="flex w-full items-center">
                  <div className="flex justify-center p-[15px] items-center text-amber-500 bg-gray-100">
                    <MdOutlineMailOutline size={"1.5rem"} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-white w-full bg-white text-black p-[15px] focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button type="submit" className="bg-amber-500 cursor-pointer text-white drop-shadow-xl hover:bg-[#ecb858ec] duration-300 shadow-[0px_4px_10px_#00000026] p-[15px] lg:px-[20px]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 gap-[60px] tracking-wide text-left bg-[#1E1E1E] p-[30px] py-[50px] sm:py-[80px] lg:px-[50px] text-white">
        <div className="flex flex-col gap-[20px] w-[100%]">
          <div>
            <Point />
          </div>
          <p className="font-[400] text-lg inline-block">
            Our mission is simple: to make food delivery easy, efficient, and
            enjoyable for every Nigerian. Whether you're craving traditional
            Nigerian delicacies, international cuisines, or quick bites on the
            go, we've got you covered.
          </p>
          <div className="flex gap-[20px]">
            <FaFacebookF size={"1.5rem"} className="hover:text-gray-400" />
            <FaXTwitter size={"1.5rem"} className="hover:text-gray-400" />
            <FaInstagram size={"1.5rem"} className="hover:text-gray-400" />
            <FaLinkedinIn size={"1.5rem"} className="hover:text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full xl:grid-cols-3 lg:grid-cols-2 gap-[30px]">
          <div>
            <p className="text-[20px] mb-[20px] font-semibold transform transition-transform duration-300 hover:scale-105">
              COMPANY
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-lg">
              <Link to={"/aboutus"}>
                <p onClick={window.scrollTo(0, 0)} className="overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  About Us
                </p>
              </Link>
              <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                Blog
              </p>
              <Link to={"/faq"} className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                FAQ
              </Link>
              <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                Contact Us
              </p>
            </div>
          </div>
          <div>
            <p className="text-[20px] mb-[20px] font-semibold transform transition-transform duration-300 hover:scale-105">
              PATHNER WITH US
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-lg">
              <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                Couriers
              </p>
              <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                Resturants
              </p>
              <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                Vendors
              </p>
            </div>
          </div>
          {/* <div>
            <p className="text-[20px] mb-[20px] font-semibold transform transition-transform duration-300 hover:scale-105">
              CONTACT US
            </p>
            <div className="font-[400] w-full flex flex-col gap-[20px] text-lg">
              <div className="flex gap-2 items-center">
                <div className="p-2 flex justify-center rounded-full items-center bg-amber-500">
                  <FaPhoneAlt size={"1rem"} />
                </div>
                <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                  +23458576458<br />+23455756577
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="p-2 flex justify-center rounded-full items-center bg-amber-500">
                  <IoMail size={"1rem"} />
                </div>
                <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                  +23458576458<br />+23455756577
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="p-2 flex justify-center rounded-full items-center bg-amber-500">
                  <FaLocationDot size={"1rem"} />
                </div>
                <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
                  322 Road, E Close<br />Festac Town Lagos.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lg:flex bg-[#585353] justify-between items-center font-[590] p-[30px] py-[30px] text-white lg:px-[50px] gap-4">
        <div className="pb-3 lg:pb-0">
          2024 &copy; CopyRight PointPlus
        </div>
        <div className="flex gap-4 items-center">
          <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
            TERMS & CONDITION
          </p>
          <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
            PRIVACY POLICY
          </p>
          <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
            COOKIE POLICY
          </p>
          <p className=" transform transition-transform cursor-pointer duration-300 hover:scale-105">
            COMPLAINCE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
