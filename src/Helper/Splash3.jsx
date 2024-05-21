import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

const Splash3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Hide scroll bar during animation
    document.body.style.overflow = "hidden";

    return () => {
      // Revert back to normal scroll behavior after component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  const props = useSpring({
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 2 },
    config: config.slow,
    onRest: () => {
      // Navigate to Splash4 page after the animation completes
      navigate("/splash7");
    },
  });

  return (
    <animated.div
      style={{
        opacity: props.opacity,
        transform: props.scale.to((s) => `scale(${s})`),
        height: "100vh", // Set height to 100vh
        width: "100%", // Set width to 100%
        overflow: "hidden", // Ensure no overflow
      }}
      className="splash3 overflow-hidden flex justify-center items-center"
    >
      <p className="asap3">A</p>
    </animated.div>
  );
};

export default Splash3;
