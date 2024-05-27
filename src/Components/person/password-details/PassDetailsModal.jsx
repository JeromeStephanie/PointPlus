import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const PassDetailsModal = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggle = () => {
    setOpen(!open);
  }
  const toggle2 = () => {
    setOpen2(!open2);
  }
  const toggle3 = () => {
    setOpen3(!open3);
  }

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <form className="modal-content card_details rounded-[25px] p-[20px] px-[30px] w-[90%] md:w-[70%] lg:w-[50%] h-auto flex-col xl:w-[50%] drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <p className="text-[25px] tracking-wide text-center w-full font-semibold">
              Password
            </p>
            <div className="flex tracking-wide mt-[30px] gap-[10px] flex-col w-full">
              <div className="flex justify-between border-b-2 text-[20px] leading-[24px] border-b-gray-200">
                <div className="flex w-full items-center">
                  <div className="flex justify-center items-center p-[10px]">
                    <FiLock size={"1.5rem"} />
                  </div>
                  <input
                    type={open === false ? "password" : "text"}
                    placeholder="Old password"
                    className="p-[10px] w-full focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center items-center p-[10px] text-xl">
                  {open === false ? (
                    <FiEyeOff onClick={toggle} />
                  ) : (
                    <FiEye onClick={toggle} />
                  )}
                </div>
              </div>
              <div className="flex justify-between border-b-2 text-[20px] leading-[24px] border-b-gray-200">
                <div className="flex w-full items-center">
                  <div className="flex justify-center items-center p-[10px]">
                    <FiLock size={"1.5rem"} />
                  </div>
                  <input
                    type={open2 === false ? "password" : "text"}
                    placeholder="Password"
                    className="p-[10px] w-full  focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center items-center p-[10px] text-xl">
                  {open2 === false ? (
                    <FiEyeOff onClick={toggle2} />
                  ) : (
                    <FiEye onClick={toggle2} />
                  )}
                </div>
              </div>
              <div className="flex justify-between border-b-2 text-[20px] leading-[24px] border-b-gray-200">
                <div className="flex w-full items-center">
                  <div className="flex justify-center items-center p-[10px]">
                    <FiLock size={"1.5rem"} />
                  </div>
                  <input
                    type={open3 === false ? "password" : "text"}
                    placeholder="Re-enter password"
                    className="p-[10px] focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center items-center p-[10px] text-xl">
                  {open3 === false ? (
                    <FiEyeOff onClick={toggle3} />
                  ) : (
                    <FiEye onClick={toggle3} />
                  )}
                </div>
              </div>
            </div>
            <span
              onClick={onClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-7 right-7 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
            <div className="flex justify-center mt-[30px] items-center w-full">
              <button
                className="bg-amber-500 text-[20px] rounded-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026] w-[80%] p-[10px] text-white font-semibold"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PassDetailsModal;
