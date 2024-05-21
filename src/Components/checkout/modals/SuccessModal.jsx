import React from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { success } from "../../../Assets";

const SuccessModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
      navigate("/");
    };

    const handleClose = () => {
      navigate("/");
    };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content rounded-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026] p-[30px] px-[50px] bg-white w-auto h-auto">
            <div className="w-full pl-[90px]">
              <img src={success} className="w-[50%] " alt="success" />
            </div>
            <p className="text-[30px] w-full font-semibold mb-3">
              Payment Successful
            </p>
            <p>Your Payment was Successful!!</p>
            <div
              onClick={handleGetStartedClick}
              className="bg-amber-500 flex justify-center items-center text-[18px] drop-shadow-xl shadow-[0px_4px_10px_#00000026] mt-3 cursor-pointer font-semibold p-[10px] px-[20px]"
            >
              Track your order
            </div>
            <span
              onClick={handleClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
          </div>
        </div>
      )}
      ;
    </div>
  );};

export default SuccessModal;
