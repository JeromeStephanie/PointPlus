import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPencilOutline } from "react-icons/io5";
import ImageUploadModal from "../person/image-upload/ImageUploadModal";
import Headers from "../../Helper/Headers";
import { img_avatar } from "../../Assets";
import PersonalDetailsModal from "./personal-details/PersonalDetailsModal";
import ContactDetailsModal from "./contact-details/ContactDetailsModal";
import PhoneDetailsModal from "./phone-details/PhoneDetailsModal";

const Person = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isPersonalDetailsModalOpen, setIsPersonalDetailsModalOpen] = useState(false);
  const [isContactDetailsModalOpen, setIsContactDetailsModalOpen] = useState(false);
  const [isPhoneDetailsModalOpen, setIsPhoneDetailsModalOpen] = useState(false);

  const handlePersonalDetailsModal = () => {
    setIsPersonalDetailsModalOpen(true); // Always open the Dashboard
  };

  const handlePersonalDetailsModalClose = () => {
    setIsPersonalDetailsModalOpen(false); // Close the Dashboard
  };
  const handleContactDetailsModal = () => {
    setIsContactDetailsModalOpen(true); // Always open the Dashboard
  };

  const handleContactDetailsModalClose = () => {
    setIsContactDetailsModalOpen(false); // Close the Dashboard
  };
  const handlePhoneDetailsModal = () => {
    setIsPhoneDetailsModalOpen(true); // Always open the Dashboard
  };

  const handlePhoneDetailsModalClose = () => {
    setIsPhoneDetailsModalOpen(false); // Close the Dashboard
  };

  const handleViewAllClick = () => {
    navigate("/recentOrders");
  };

  const handleImageClick = () => {
    setUploadModalOpen(true);
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className=" flex flex-col">
      <Headers />
      <PersonalDetailsModal
        isOpen={isPersonalDetailsModalOpen}
        onClose={handlePersonalDetailsModalClose}
      />
      <ContactDetailsModal
        isOpen={isContactDetailsModalOpen}
        onClose={handleContactDetailsModalClose}
      />
      <PhoneDetailsModal
        isOpen={isPhoneDetailsModalOpen}
        onClose={handlePhoneDetailsModalClose}
      />
      <div className="p-[30px]">
        <NavLink to="/">
          <FaChevronLeft size={"1.5rem"} />
        </NavLink>
      </div>
      <div className="flex flex-col lg:px-[50px] justify-center items-center p-[30px] pt-4 border-b-4 border-b-gray-300">
        <div
          onClick={handleImageClick}
          className=" w-[20%] flex flex-shrink-0 justify-center items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            src={avatar || img_avatar}
            className="w-[100%] h-[100%] border mb-4 drop-shadow-xl shadow-[0px_4px_10px_#00000026] border-hidden rounded-[90px]"
            alt="avatar"
          />
        </div>
        <p className="font-[number:var(--h-3-font-weight)] text-[40px] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
          Welcome,{" "}
          <span className="font-[number:var(--h-3-font-weight)] text-[40px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
            User.
          </span>
        </p>
      </div>
      <ImageUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onUpload={handleImageUpload}
      />
      <form className="border-b-2 mb-7 border-b-black">
        <div className="my-5">
          <div className="flex items-center justify-between w-[70%] text-left lg:px-[50px] ml-[30px] mb-7 font-semibold text-lg">
            <p className="">Personal Details</p>
            <p
              onClick={handlePersonalDetailsModal}
              className="text-amber-500 font-bold cursor-pointer"
            >
              Edit
            </p>
          </div>
          <div className="flex lg:px-[50px] w-full flex-col gap-[10px] text-left border-b-4 border-b-gray-300">
            <div className="flex w-full justify-between">
              <p className="font-semibold ml-[30px] w-[50%]">Name</p>
              <input
                type="text"
                className="text-left focus:border-b-2 px-[10px] focus:border-b-gray-300 outline-0 w-[50%]"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="font-semibold ml-[30px] w-[50%]">Email Address</p>
              <input
                type="text"
                className="text-left focus:border-b-2 px-[10px] focus:border-b-gray-300 outline-0 w-[50%]"
              />
            </div>
            <div className="flex mb-7 items-center w-full justify-between">
              <p className="font-semibold ml-[30px] w-[50%]">Member Since</p>
              <span className="w-[50%] px-[10px]">2nd, May, 2020</span>
            </div>
          </div>
          <div className="text-left lg:px-[50px] border-b-4 border-b-gray-300">
            <div className="flex items-center my-7 justify-between text-lg font-semibold ml-[30px] w-[70%]">
              <p className="">Other Details</p>
              <p
                className="text-amber-500 font-bold cursor-pointer"
                onClick={handlePhoneDetailsModal}
              >
                Edit
              </p>
            </div>
            <div className="flex w-full mb-7 items-center justify-between">
              <p className="font-semibold ml-[30px] w-[50%]">Password</p>
              <input
                type="password"
                className="text-left focus:border-b-2 px-[10px] focus:border-b-gray-300 outline-0 w-[50%]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-[70%] text-left lg:px-[50px] ml-[30px] my-7 font-semibold text-lg">
            <p className="">Contact Details</p>
            <p
              className="text-amber-500 font-bold cursor-pointer"
              onClick={handleContactDetailsModal}
            >
              Edit
            </p>
          </div>
          <div className="flex w-full flex-col gap-[10px] lg:px-[50px] text-left">
            <div className="flex w-full items-center justify-between">
              <p className="font-semibold ml-[30px] w-[50%]">Phone Number</p>
              <input
                type="text"
                className="text-left focus:border-b-2 px-[10px] focus:border-b-gray-300 outline-0 w-[50%]"
              />
            </div>
          </div>
        </div>
      </form>

      <div>
        <div className="flex lg:px-[50px] justify-between mx-[30px]">
          <p className="text-left font-semibold text-lg">Review Orders</p>
          <p
            onClick={handleViewAllClick}
            className="text-left font-semibold text-lg cursor-pointer"
          >
            View All
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
