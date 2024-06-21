import React, { useState } from "react";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { email } from "../../../Assets";
import { MdOutlineMail } from "react-icons/md";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

function MailForm({ setFormType, onClose }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
    setOpen(!open);
  }

    return (
        <div className="flex rounded-[10px] flex-col gap-[20px] border p-[50px]">
            <div className="flex gap-[20px] justify-start flex-col">
                <div className="flex justify-center p-[2px] rounded-[80px] w-[25%] bg-amber-500 center items-center">
                    <img src={email} height={"10px"} alt="phone" />
                </div>
                <h1 className="text-black lg:text-3xl text-2xl lg:font-[590] font-[590] tracking-wide">
                    Enter email and password
                </h1>
                <p className="font-medium text-gray-500">
                    Let's start off with your Email address and Password
                </p>
            </div>
            <div>
                <form action="" className="flex flex-col gap-[20px]">
                    <div className="flex items-center rounded-lg border border-solid border-[#898989]">
                        <div className="flex  justify-center items-center p-[15px]">
                            <MdOutlineMail size={"1.5rem"}/>
                        </div>
                        <input
                            type="text"
                            placeholder="Email"
                            style={{
                                width: "100%",
                                height: "50px",
                                padding: "15px",
                                borderRadius: "8px",
                                cursor: "text",
                                paddingLeft: "10px",
                                color: "black", // Set the text color to black
                                caretColor: "black"
                            }}
                            className="focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-between  rounded-lg border border-solid border-[#898989]">
                        <div className="flex w-full items-center">
                            <div className="flex justify-center items-center p-[15px]">
                                <FiLock size={"1.5rem"} />
                            </div>
                            <input
                                type={open === false ? "password" : "text"}
                                placeholder="Password"
                                className="p-[15px] w-full focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-center items-center p-[15px] text-xl">
                            {open === false ? (
                                <FiEyeOff onClick={toggle} />
                            ) : (
                                <FiEye onClick={toggle} />
                            )}
                        </div>
                    </div>

                    <button className="bg-amber-500 mt-4 font-[590]" style={{
                        width: "100%",
                        height: "50px",
                        padding: "15px",
                        borderRadius: "20px",
                        color: "#ffffff",
                    }}>Continue</button>
                </form>

            </div>
            <span
                onClick={() => setFormType("sms")}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 left-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoArrowBack size={"1.5rem"} />
            </span>
            {/* <span
                onClick={onClose}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoClose size={"1.5rem"} />
            </span> */}
        </div>
    );
}

export default MailForm;
