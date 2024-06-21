import React from "react";
import Point from "../../../Helper/Point";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const AboutUSHeader = ({ handleToggleModal }) => {
  return (
    <div className="w-full NavLink px-[50px] h-20 border-b-[1px] border-b-white left-0 sticky top-0 z-50 bg-transparent drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-gray-600 body-font flex justify-between items-center w-full">
          <div className="flex mt-[20px] items-center gap-[20px]">
            <div onClick={handleToggleModal} className="menu bg-amber-500 ml-[10px] hover:bg-[#ecb858ec] duration-300 rounded-full cursor-pointer md:hidden p-[7px] text-white">
              <RxHamburgerMenu size={"1.2rem"} />
            </div>
            <div className="w-[50%] cursor-pointer flex justify-center items-center">
              <Link to={"/"}>
                <Point />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 p-4 about-navlinks items-center">
            <div className="w-full flex justify-center items-center">
              <ul className="flex justify-center p-[10px] rounded-[20px] [font-family:var(--logo-text-font-family)] font-semibold bg-amber-500 text-white px-[30px] gap-[20px] items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">FAQs</li>
                <li className="cursor-pointer">Blog</li>
                <Link to={"/contact"}>
                  <li className="cursor-pointer">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUSHeader;
