import React from "react";
import Point from "../../../Helper/Point";

const AboutUSHeader = () => {
  return (
    <div className="w-full h-[80px] flex justify-between px-[30px] bg-transparent sticky top-0 z-50">
      <div className="w-full p-auto justify-center mt-[10px] items-center">
        <Point />
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="flex justify-center p-[10px] rounded-[20px] [font-family:var(--logo-text-font-family)] font-semibold bg-amber-500 text-white px-[30px] gap-[20px] items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">What we do</li>
          <li className="cursor-pointer">FAQs</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUSHeader;
