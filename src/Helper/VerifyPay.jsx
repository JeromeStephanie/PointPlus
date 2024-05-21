import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { otp } from "../Assets";
import Headers from "../Helper/Headers";

const VerifyPay = () => {
  const [otps, setOtps] = useState(new Array(4).fill(""));
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtps([...otps.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="w-full">
      <Headers />
      <div className="flex justify-center items-center h-screen">
        <div className=" border border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] p-[30px] Otp w-[50%] h-[100%]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <div className="flex items-center w-full gap-[50px]">
              <Link to={"/"}>
                <FaChevronLeft size={"1.5rem"} />
              </Link>
              <p className="font-[number:var(--h-3-font-weight)] text-[24px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                Verify your payment
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <picture>
                <source media="(max-width: 768px)" srcSet={otp} />
                <img className="max-w-[700px] h-auto" src={otp} alt="otp" />
              </picture>
              <p className="font-[number:var(--h-3-font-weight)] pt-2 text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                An OTP was sent to you
              </p>
              <div className="mt-[30px] flex gap-[50px]">
                {otps.map((data, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={data}
                      className="w-[60px] p-[10px] outline-0 text-center border-2 rounded-[5px] border-gray-400 h-[70px]"
                      maxLength={1}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                ))}
              </div>
              <div className="flex w-[100%] mt-[50px] justify-between">
                <span>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </span>
                <button
                  disabled={seconds > 0 || minutes > 0}
                  style={{
                    color: seconds > 0 || minutes > 0 ? "#ffa500" : "inherit",
                  }}
                  className="text-amber-500 font-semibold w-[30%] cursor-pointer"
                  onClick={resendOTP}
                >
                  Resend
                </button>
              </div>
              <div className="bg-amber-500 w-[50%] flex justify-center items-center text-[18px] font-semibold p-[10px] px-[30px] mt-[40px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                Send
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[100%] payment h-screen flex gap-[35%] relative mt-[-10px] mb-5 pl-0">
          <div className="link">
            <Link to={"/"}>
              <button>
                <FaChevronLeft size={"1.5rem"} />
              </button>
            </Link>
          </div>
          <div className="pay">
            <p className="font-[number:var(--h-3-font-weight)] text-[40px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              Verify your payment
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VerifyPay;
