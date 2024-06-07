import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import PhoneNumberInput from "../../person/phone-input/PhoneNumberInput";
import { google } from "../../../Assets";
import { MdOutlineMailOutline } from "react-icons/md";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <div>
      {
        isOpen && (
          <div>
            <div className="fixed top-0 left-0 bg-black/80 w-full h-[100dvh] z-[50]" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{}}
              className="bg-white rounded-[10px] fixed left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] lg:w-[35%] w-[100%] md:w-[50%] h-auto z-[100]">
              <div className="flex rounded-[10px] flex-col gap-[20px] border p-[30px]">
                <div className="flex gap-[20px] justify-center items-center flex-col">
                  <h1 className="text-black lg:text-4xl text-2xl lg:font-bold font-semibold tracking-[2px]">Welcome</h1>
                  <p className="font-medium text-gray-500">Let's start off with your phone number.</p>
                </div>
                <PhoneNumberInput />
                <button className="bg-amber-500 mt-[20px] py-[6px] rounded-[20px] text-white font-semibold">Continue with SMS</button>
                <div className="flex w-full gap-2 justify-center items-center">
                  <hr className="w-[50%]" />
                  <p>or</p>
                  <hr className="w-[50%]" />
                </div>
                <button className="border px-[15px] py-2 rounded-[20px] border-gray-300">
                  <div className="flex justify-between w-[60%]">
                    <div className="w-[20px] h-[20px]">
                      <img src={google} className="w-full object-cover" alt="google" />
                    </div>
                    <p className="font-semibold">Google</p>
                  </div>
                </button>
                <button className="border px-[15px] py-2 rounded-[20px] border-gray-300">
                  <div className="flex justify-between w-[60%]">
                    <div className="text-amber-500 flex justify-center items-center">
                      <MdOutlineMailOutline size={"1.5rem"} />
                    </div>
                    <p className="font-semibold">Email</p>
                  </div>
                </button>
                <span
                  onClick={onClose}
                  className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
                >
                  <IoClose size={"1.5rem"} />
                </span>
              </div>
            </motion.div>
          </div>
        )

      }
    </div>
  );
};

export default LoginModal;
