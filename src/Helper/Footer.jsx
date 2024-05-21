import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Point from "./Point";

const Footer = () => {

  return (
    <div className="flex mt-[50px] flex-col w-full h-auto">
      <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 gap-[70px] text-left bg-black  p-[50px] text-white">
        <div className="flex flex-col gap-[20px] w-[100%]">
          <div>
            <Point />
          </div>
          <p className="font-[400] text-[14px] inline-block leading-[16.94px]">
            Our mission is simple: to make food delivery easy, efficient, and
            enjoyable for every Nigerian. Whether you're craving traditional
            Nigerian delicacies, international cuisines, or quick bites on the
            go, we've got you covered.
          </p>
          <form action="#">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-white bg-transparent text-white p-[10px] focus:outline-none focus:shadow-outline"
              />
              <div className="bg-amber-500 p-[10px]">
                Subscribe Now
              </div>
            </div>
          </form>
          <div className="flex gap-[10px]">
            <FaFacebook />
            <RiInstagramFill />
            <FaLinkedin />
            
          </div>
        </div>
        <div className="grid grid-cols-2 w-full xl:grid-cols-3 lg:grid-cols-2 gap-[70px]">
          <div>
            <p className="text-[20px] mb-[20px] font-semibold transform transition-transform duration-300 hover:scale-105">
              COMPANY
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[16.94px]">
              <Link to={"/aboutus"}>
                <p className="overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  About Us
                </p>
              </Link>
              <p className=" transform transition-transform duration-300 hover:scale-105">
                Blog
              </p>
              <p className=" transform transition-transform duration-300 hover:scale-105">
                FAQ
              </p>
              <p className=" transform transition-transform duration-300 hover:scale-105">
                Contact Us
              </p>
            </div>
          </div>
          <div>
            <p className="text-[20px] mb-[20px] font-semibold transform transition-transform duration-300 hover:scale-105">
              PATHNER WITH US
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[16.94px]">
              <p className=" transform transition-transform duration-300 hover:scale-105">
                Couriers
              </p>
              <p className=" transform transition-transform duration-300 hover:scale-105">
                Resturants
              </p>
              <p className=" transform transition-transform duration-300 hover:scale-105">
                Vendors
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" transform transition-transform duration-300 hover:scale-105">
              TERMS & CONDITION
            </p>
            <p className=" transform transition-transform duration-300 hover:scale-105">
              PRIVACY POLICY
            </p>
            <p className=" transform transition-transform duration-300 hover:scale-105">
              COOKIE POLICY
            </p>
            <p className=" transform transition-transform duration-300 hover:scale-105">
              COMPLAINCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
