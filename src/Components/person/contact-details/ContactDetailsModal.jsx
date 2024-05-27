import React from "react";
import { IoClose } from "react-icons/io5";
import { phone } from "../../../Assets";
import PhoneNumberInput from "../phone-input/PhoneNumberInput";

const ContactDetailsModal = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <form className="modal-content card_details rounded-[25px] p-[20px] px-[40px] w-[80%] md:w-[39%] lg:w-[36%] h-auto flex-col xl:w-[36%] drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <div className="flex justify-center p-[5px] rounded-[80px] w-[20%] bg-amber-500 center items-center">
              <img src={phone} height={"10px"} alt="phone" />
            </div>
            <p className="text-[24px] mt-[3px] text-left w-full font-semibold">
              Add phone number
            </p>
            <p className="mt-[20px] font-normal">
              <span className="text-gray-600 font-medium">
                Your phone number is already verified.
              </span>
              To change it, you'll need to verify the new one.
            </p>
            <div className="border flex flex-col gap-[10px] bg-gray-200 mt-[20px] rounded-[20px] p-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
              <div className="text-left">
                <p className="font-semibold">Phone</p>
              </div>
              <PhoneNumberInput />
            </div>
            <span
              onClick={onClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
            <div className="flex justify-center gap-[20px] mt-[30px] items-center w-full">
              <button
                className="bg-amber-500 text-[18px] rounded-[20px] shadow-[0px_4px_10px_#00000026] w-[80%] p-[7px] text-white font-semibold"
                type="submit"
              >
                SMS
              </button>
              <button
                className="bg-amber-500 text-[18px] rounded-[20px] shadow-[0px_4px_10px_#00000026] w-[80%] p-[7px] text-white font-semibold"
                type="submit"
              >WhatsApp</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsModal;
