import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiInformationLine } from "react-icons/ri";
import { TiShoppingCart, TiGroup } from "react-icons/ti";
import { RiEBike2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="dashboard-modal">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="modalContent flex flex-col gap-[10px] items-center"
          >
            <div className="p-[20px] pt-[10px]">
              <div className="flex items-center gap-[10px] py-[5px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                <h1 className="font-logo-text font-[number:var(--logo-text-font-weight)] text-[#ffa500] text-[length:var(--logo-text-font-size)] tracking-[var(--logo-text-letter-spacing)] leading-[var(--logo-text-line-height)] whitespace-nowrap [font-style:var(--logo-text-font-style)]">
                  Point+
                </h1>
                <div className="flex items-center p-4 pt-7" onClick={onClose}>
                  <RxHamburgerMenu size={"1.2rem"} />
                </div>
              </div>
            </div>
            <div className="flex font-[590] flex-col w-full justify-start">
              <NavLink
                to={"/"}
                exact
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <IoHome />
                </div>
                Home
              </NavLink>
              <NavLink
                to={"/faq"}
                exact
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <FaListUl />
                </div>
                Categories
              </NavLink>
              <NavLink
                to={"/person"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <LiaClipboardListSolid />
                </div>
                Order History
              </NavLink>
              <NavLink
                to={"/orders"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <TiShoppingCart />
                </div>
                Cart
              </NavLink>
              <NavLink
                to={"/"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <BsCardChecklist />
                </div>
                Reviews
              </NavLink>
              <NavLink
                to={"/aboutus"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <TiGroup />
                </div>
                Vendors
              </NavLink>
              <NavLink
                to={"/aboutus"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <RiEBike2Line />
                </div>
                Riders
              </NavLink>
              <NavLink
                to={"/aboutus"}
                activeClassName="active"
                onClick={onClose}
                className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
              >
                <div className="flex justify-center items-center">
                  <RiInformationLine />
                </div>
                About Us
              </NavLink>
              <div className="flex justify-center items-center">

                <button className="absolute bottom-6 hover:bg-[#ffa5004c] duration-300 drop-shadow-xl bg-[#ffa500] py-[8px] px-[50px] shadow-[0px_4px_10px_#00000026] font-[590]">
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;
