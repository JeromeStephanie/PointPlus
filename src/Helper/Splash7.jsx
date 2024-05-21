import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash7.css"; 

const Splash7 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000); // 1000ms = 1s (matching the animation duration)

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash7 w-full h-screen flex flex-col justify-center items-center">
      <div className="splash-container">
        <div className="text-amber-500 text-[86.26px] font-bold font-['Roboto Condensed'] splash7-asap">
          Point+
        </div>
        <div className="text-black text-xl font-bold font-['Roboto Condensed'] splash7-text">
          Delivering Flavor, One Bite at a Time.
        </div>
      </div>
    </div>
  );
};

export default Splash7;
