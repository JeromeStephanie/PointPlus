import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPencilOutline } from "react-icons/io5";
import ImageUploadModal from "../person/image-upload/ImageUploadModal";
import Headers from "../../Helper/Headers";
import { img_avatar } from "../../Assets";

const Person = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

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
        <div className=" my-5">
          <p className="text-left lg:px-[50px] ml-[30px] mb-7 font-semibold text-lg">
            Personal Details
          </p>
          <div className="grid grid-cols-2 lg:px-[50px] text-left border-b-4 border-b-gray-300">
            <div className="flex flex-col gap-[20px]">
              <p className="font-semibold ml-[30px]">Name</p>
              <p className="font-semibold ml-[30px]">User Name</p>
              <p className="font-semibold ml-[30px]">Date of Birth</p>
              <p className="font-semibold ml-[30px]">Sex</p>
              <p className="font-semibold ml-[30px] mb-7">Member Since</p>
            </div>
            <div className="flex flex-col mr-[30px]">
              <div className="flex items-center gap-[10px] w-[100%] pl-0 p-[10px]">
                <input type="text" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
              <div className="flex items-center gap-[10px] w-[100%] pl-0  px-[10px]">
                <input type="text" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
              <div className="flex items-center gap-[10px] w-[100%] pl-0 p-[10px]">
                <input type="date" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
              <div className="flex items-center gap-[10px] w-[100%] pl-0 p-[10px]">
                <input type="text" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
              <span className="mt-5 mb-7">2nd, May, 2020</span>
            </div>
          </div>
          <p className="text-left lg:px-[50px] ml-[30px] my-7 font-semibold text-lg">
            Contact Details
          </p>
          <div className="grid grid-cols-2 lg:px-[50px] text-left">
            <div className="flex flex-col ml-[30px] gap-[20px]">
              <p className="font-semibold">Email Address</p>
              <p className="font-semibold">Phone Number</p>
            </div>
            <div className="flex flex-col mr-[30px]">
              <div className="flex items-center gap-[10px] w-[100%] pl-0 p-[10px]">
                <input type="email" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
              <div className="flex items-center border gap-[10px] w-[100%] pl-0  px-[10px]">
                <input type="text" className="text-left outline-0 w-[100%]" />
                <button className="flex justify-center items-center">
                  <IoPencilOutline />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[30px] w-full text-right">
            <button className="bg-amber-500 button drop-shadow-xl shadow-[0px_4px_10px_#00000026] w-[30%] font-semibold text-lg border border-hidden mr-[30px] p-[10px] rounded-[10px]">
              Save Information
            </button>
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
