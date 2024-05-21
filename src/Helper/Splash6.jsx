import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash6 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to Splash7 after 800ms delay
      navigate("/splash7");
    }, 800);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="w-[100%] h-[100vh] px-[67px] bg-sky-100 rounded-[60px] flex-col justify-center items-center gap-[18px] inline-flex">
      <div className="text-amber-500 text-[86.26px] font-bold font-['Roboto Condensed']">
        ASAP
      </div>
      <div className="text-black text-xl font-bold font-['Roboto Condensed']">
        Delivering Flavor, One Bite at a Time.
      </div>
    </div>
  );
};

export default Splash6;
