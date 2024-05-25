import React from 'react'
import { IoClose } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from 'react-icons/fa6';

const ContactDetailsModal = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <form className="modal-content card_details rounded-[20px] p-[20px] px-[40px] w-[90%] lg:w-[50%] h-auto flex-col xl:w-[50%] overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <p className="text-[25px] text-center w-full font-semibold">
              Contact Details
            </p>

            <div className="border bg-gray-200 mt-[20px] rounded-[20px] p-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <div className="flex my-3 p-[10px] bg-white items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] appearance-none border rounded-[20px]">
                  <div className="p-[10px]">
                    <MdEmail size={"1.5rem"} />
                  </div>
                  <input
                    type="text"
                    className=" w-full py-2 px-2 rounded-[20px] border-r text-gray-700 leading-tight focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">Username</p>
                <div className="flex my-3 p-[10px] bg-white items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] appearance-none border rounded-[20px]">
                  <div className="p-[10px]">
                    <FaUserPlus size={"1.5rem"} />
                  </div>
                  <input
                    type="text"
                    className=" w-full py-2 px-2 rounded-[20px] border-r text-gray-700 leading-tight focus:outline-none"
                    placeholder="Input card number"
                  />
                </div>
              </div>
            </div>
            <span
              onClick={onClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
            <div className="flex justify-center mt-[30px] items-center w-full">
              <button
                className="bg-amber-500 text-[24px] rounded-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026] w-[80%] p-[10px] text-white font-semibold"
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
}

export default ContactDetailsModal
