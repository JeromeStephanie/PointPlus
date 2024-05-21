import React, { useState } from "react";
import { BsToggleOn } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Point from "../Components/Point";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleGetStartedClick = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex">
      <div className="bg-white p-[20px] w-[60%] max-w-[60%] h-auto">
        <form className="form w-full" action="#">
          <div className="content flex flex-col justify-center items-center">
            <div className="text-left w-full">
              <Point />
              <h1 className="mt-[15px] text-[30px] font-[400]">Welcome</h1>
              <p className="text-gray-500 mb-[30px]">
                Sign in with your Email address and Password.
              </p>
            </div>
            <div className="flex flex-col mb-3 gap-3 text-left w-[100%]">
              <label className="text-gray-500 font-[400] ">Email Address</label>
              <input
                type="text"
                placeholder="Input username"
                className="p-[10px] border bborder-gray-300 outline-none text-black"
                required
              />
            </div>
            <div className="flex gap-3 text-left flex-col w-[100%]">
              <label className="text-gray-500 font-[400]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Input password"
                  className="p-[10px] w-[80%] border border-gray-300 outline-none text-black"
                  required
                />
                <span
                  className="absolute top-1/2 right-3 border border-gray-300 p-[10px] text-amber-500  transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>
            <p className="text-right font-[400] text-gray-500 w-full mt-[12px]">
              Forgot Password?
            </p>
            <div className="flex gap-4 w-full text-left mt-3">
              <p className="text-gray-500 font-[400]">Save Details</p>
              <BsToggleOn className="text-amber-500 mt-1" size={"1.5rem"} />
            </div>
            <button
              onClick={handleGetStartedClick}
              className="bg-amber-500 text-[18px] w-full font-[500] py-[10px] px-[20%] mt-[40px]"
            >
              Login
            </button>
            <p className="text-gray-500 font-[400] mt-[20px]">
              Don't have an account?{" "}
              <span className="text-amber-500 font-bold">SignUp</span>
            </p>
            <button className="w-full border-2 mt-[20px] font-bold py-[10px] bg-transparent text-amber-500 border-amber-500">
              Sign in with google
            </button>
          </div>
        </form>
      </div>
      <div className="w-[50%] background2">
      </div>
    </div>
  );
};

export default Login;
