import React, { useState } from "react";
import Point from "../../../Helper/Point";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Dashboard from "../../home/dashboard/Dashboard";

const AboutUSHeader = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className="w-full NavLink pb-[20px] px-[50px] h-20 border-b-[1px] border-b-white left-0 sticky top-0 z-50 bg-transparent drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
      <div className="flex flex-col h-20 items-center justify-center">
        <div className="text-gray-600 body-font flex justify-between items-center w-full">
          <div className="flex items-center gap-[20px]">
            <div className="menu cursor-pointer md:hidden p-[10px] mt-[10px] text-amber-500">
              <IoMenuOutline size={"3rem"} onClick={handleToggleModal} />
            </div>
            <div className="w-[50%]cursor-pointer flex justify-center items-center">
              <Link to={"/"}>
                <Point />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 p-4 items-center">
            <div className="w-full flex justify-center items-center">
                 <ul className="flex justify-center p-[10px] rounded-[20px] [font-family:var(--logo-text-font-family)] font-semibold bg-amber-500 text-white px-[30px] gap-[20px] items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                  <li className="cursor-pointer">Company</li>
                   <li className="cursor-pointer">What we do</li>
                   <li className="cursor-pointer">FAQs</li>
                   <li className="cursor-pointer">Blog</li>
                   <li className="cursor-pointer">Contact</li>
                 </ul>
               </div>
            {/* <div className="flex flex-col relative gap-[10px] justify-center items-center">
              <div className="w-[52px] border-2 border-gray-400 cursor-pointer h-[52px] rounded-full flex justify-center items-center">
                <img
                  ref={imgRef}
                  src={avatar}
                  className="w-full h-full object-cover rounded-full"
                  alt="avatar"
                  onClick={() => setOpen(!open)}
                />
              </div>
              {open && (
                <div
                  ref={menuRef}
                  className="bg-white absolute top-[60px] p-4 w-[200px] shadow-lg"
                >
                  <ul>
                    {Menu.map((menu) => (
                      <li
                        onClick={() => setOpen(false)}
                        className="p-2 hover:bg-amber-200 text-lg rounded cursor-pointer"
                        key={menu}
                      >
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
            {/* <Link to={"/orders"} className="cart-icon">
              <div className="relative w-11 pt-3">
                <TiShoppingCart size={"2rem"} className="text-amber-500" />
                <span className="absolute rounded-xl bg-red-600 text-white border num w-4 top-1 right-0 text-sm flex items-center justify-center font-semibold">
                  7
                </span>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      <Dashboard
        isOpen={isDashboardModalOpen}
        onClose={handleToggleModalClose}
      />
    </div>
    // <div className="w-full h-[80px] flex justify-between px-[30px] bg-transparent sticky top-0 z-50">
    //   <div className="w-full p-auto justify-center mt-[10px] items-center">
    //     <Point />
    //   </div>
    //   <div className="w-full flex justify-center items-center">
    //     <ul className="flex justify-center p-[10px] rounded-[20px] [font-family:var(--logo-text-font-family)] font-semibold bg-amber-500 text-white px-[30px] gap-[20px] items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
    //       <li className="cursor-pointer">Company</li>
    //       <li className="cursor-pointer">What we do</li>
    //       <li className="cursor-pointer">FAQs</li>
    //       <li className="cursor-pointer">Blog</li>
    //       <li className="cursor-pointer">Contact</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default AboutUSHeader;
