import React, { useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import {
  RiInformationLine,
} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <IoHome />,
    },
    {
      path: "/categories",
      name: "Categories",
      icon: <FaListUl />,
    },
    {
      path: "/person",
      name: "Order History",
      icon: <LiaClipboardListSolid />,
    },
    {
      path: "/orders",
      name: "Cart",
      icon: <TiShoppingCart />,
    },
    {
      path: "/verify",
      name: "Reviews ",
      icon: <BsCardChecklist />,
    },
    {
      path: "/aboutus",
      name: "About US",
      icon: <RiInformationLine />,
    },
  ];

  return (
    <div className="hidden side">
        <div
          style={{
            width: isOpen ? "220px" : "50px",
          }}
          className="sidebar"
        >
          <div className="top-section mb-[20px]">
            <div className="flex items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className=" font-logo-text font-[number:var(--logo-text-font-weight)] text-[#ffa500] text-[length:var(--logo-text-font-size)] tracking-[var(--logo-text-letter-spacing)] leading-[var(--logo-text-line-height)] whitespace-nowrap [font-style:var(--logo-text-font-style)]"
              >
                Point+
              </h1>
              <div className="flex items-center p-4 pt-7">
                <RxHamburgerMenu size={"1.2rem"} onClick={toggle} />
              </div>
            </div>
          </div>
          {menuItem.map((item) => (
              <NavLink to={item.path} className="link flex items-center">
                <div>{item.icon}</div>

                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link-text font-semibold"
                >
                  {item.name}
                </div>
              </NavLink>
          ))}
          <div
            className="mt-[130px] ml-[20px] flex justify-center items-center border"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <button className="drop-shadow-xl bg-[#ffa500] py-[8px] px-[50px] shadow-[0px_4px_10px_#00000026] font-semibold">
              Logout
            </button>
          </div>
        </div>
     
      <main className="main">{children}</main>
    </div>
  );
};

export default Sidebar;
