import React from "react";
import { IoArrowBack } from "react-icons/io5";

function MailForm({ setFormType }) {
    return (
        <div className="flex rounded-[10px] flex-col gap-[20px] border p-[50px]">
            <div className="flex gap-[20px] justify-center items-center flex-col">
                <h1 className="text-black lg:text-4xl text-2xl lg:font-[590] font-[590] tracking-[2px]">
                    Welcome
                </h1>
                <p className="font-medium text-gray-500">
                    Let's start off with your Email address.
                </p>
            </div>
            <div>
                <form action="">
                    <div>
                        <input
                            type="text"
                            style={{
                                width: "100%",
                                height: "50px",
                                padding: "15px",
                                borderRadius: "20px",
                                cursor: "text",
                                paddingLeft: "18px",
                                color: "black", // Set the text color to black
                                caretColor: "black"
                            }}
                            className="border border-solid border-[#898989] focus:border-[#898989] focus:border focus:border-solid"
                        />
                    </div>

                    <button className="bg-amber-500 mt-4 font-[590]" style={{
                        width: "100%",
                        height: "50px",
                        padding: "15px",
                        borderRadius: "20px",
                        color: "#ffffff",
                    }}>Continue with Email</button>
                </form>

                <div className="flex justify-center items-center">
                    <p className="font-medium text-gray-500">Don't have an account yet? <span className="text-amber-500 text-lg cursor-pointer">SignUp</span></p>
                </div>
            </div>
            <span
                onClick={() => setFormType("sms")}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 left-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoArrowBack size={"1.5rem"} />
            </span>
        </div>
    );
}

export default MailForm;
