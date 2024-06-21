import React, { useState } from "react";
import AboutUSHeader from "../about-us/nav-link/AboutUSHeader";
import ContentSlide from "../about-us/content-slider/ContentSlide";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { burger, deliver, team } from "../../Assets";
import Dashboard from "./dashboard/Dashboard";

const AboutUs = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className="w-full">
      <div className="aboutUs h-[480px] mb-[70px]">
        <AboutUSHeader handleToggleModal={handleToggleModal} />
        <div className="content2 top-[10%] sm:top-[30%] flex flex-col justify-center items-center w-[90%] left-[100%] -translate-x-[-6%] -translate-y-[-60%] gap-[20px]">
          <div>
            <p className="text-amber-500 font-[590] md:text-[40px] text-[35px] md:text-center font-logo-text [font-family:var(--logo-text-font-family)]">
              Our mission is to make food delivery easy, efficient, and enjoyable for everyone
            </p>
          </div>
        </div>
      </div>
      <ContentSlide />
      <div className="flex flex-col mt-[70px] justify-center items-center">
        <div className="flex justify-center item-center mb-[60px]">
          <p className="font-medium text-[40px] text-amber-500 [font-family:var(--logo-text-font-family)]">
            Join our thriving food delivery community
          </p>
          <div className="flex justify-center items-center">
            <FaArrowDownLong className="text-amber-500" size={"2rem"} />
          </div>
        </div>
        <div className="grid [font-family:var(--logo-text-font-family)] grid-cols-1 xl:grid-cols-3 gap-[20px] lg:grid-cols-2 px-[30px]">
          <div className="flex flex-col justify-start border border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
            <div className="p-[20px]">
              <p className="font-[590] text-[25px] mb-[20px]">Start Vending</p>
              <p className="inline-block font-medium mb-[20px]">
                Expand your restaurant's reach! Join us to connect with new customers.
              </p>
              <div className="flex gap-3 mb-[20px] items-center text-[20px] font-semibold">
                <span>See More</span>
                <div className="flex justify-center items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <img src={burger} className="w-full" alt="" />
          </div>
          <div className="flex flex-col justify-start border border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
            <div className="p-[20px]">
              <p className="font-semibold text-[25px] mb-[20px]">Deliver delight</p>
              <p className="inline-block font-medium mb-[20px]">
                Join our team of delivery riders spreading joy to customers while earning towards your dreams.
              </p>
              <div className="flex gap-3 mb-[20px]  items-center text-[20px] font-semibold">
                <span>See More</span>
                <div className="flex justify-center items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="w-full h-[100%]">
              <img src={deliver} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-start border border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
            <div className="p-[20px]">
              <p className="font-semibold text-[25px] mb-[20px]">Behind the curtain</p>
              <p className="inline-block font-medium mb-[20px]">
                If you're driven to help us perfect the art of seamless meal delivery, join us now.
              </p>
              <div className="flex gap-2 mb-[20px] items-center text-[20px] font-semibold">
                <span>See More</span>
                <div className="flex justify-center items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <img src={team} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
      <Dashboard isOpen={isDashboardModalOpen} onClose={handleToggleModalClose} />
    </div>
  );
};

export default AboutUs;
