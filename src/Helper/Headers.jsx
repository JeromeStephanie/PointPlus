import React, { useContext, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Point from "../Helper/Point";
import { FaTimes } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import Dropdown from "../Components/home/Header/drop-down/Dropdown";
import { MenuItems } from "../Components/home/Header/drop-down/menu-items/MenuItems";
import Dashboard from "../Components/home/dashboard/Dashboard";
import AvatarContext from "../Api/contexts/AvatarContext";

const Headers = () => {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Customer");
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const { avatar } = useContext(AvatarContext);

  window.addEventListener('click', (e) => {
    console.log(e.target === menuRef.current);
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    };
  });

  const Menu = ["Profile", "Logout"];

  const handleToggleModal = () => {
    setIsDashboardModalOpen(!isDashboardModalOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setClick(false);
  };

  const handleClick = () => setClick(!click);
  console.log(handleClick);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="w-full Headers px-[50px] h-20 border-b-[1px] border-b-white sticky top-0 z-50 bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-gray-600 body-font flex justify-between items-center w-full">
          <div className="flex items-center gap-[20px]">
            <div className="menu cursor-pointer p-[10px] md:hidden mt-[10px] text-amber-500">
              <IoMenuOutline size={"3rem"} onClick={handleToggleModal} />
            </div>
            <div className="w-[50%]cursor-pointer">
              <Link to={"/"}>
                <Point />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4">
            <div
              className="flex services cursor-pointer p-[10px] rounded-[30px] px-[20px] border-2 border-amber-500 items-center"
              onClick={toggleDropdown}
            >
              <p className="font-semibold">{selectedItem}</p>
              <RiArrowDownSFill />
              {/* Render dropdown if open */}
              {dropdownOpen && (
                <Dropdown
                  menuItems={MenuItems}
                  defaultItem={selectedItem}
                  handleSelect={handleSelect}
                />
              )}
            </div>
            <div className="flex flex-col relative gap-[10px] justify-center items-center">
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
            </div>
            <Link to={"/orders"} className="cart-icon">
              <div className="relative w-11 pt-3">
                <TiShoppingCart size={"2rem"} className="text-black" />
                <span className="absolute rounded-xl bg-red-600 text-white border num w-4 top-1 right-0 text-sm flex items-center justify-center font-semibold">
                  7
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Dashboard isOpen={isDashboardModalOpen} onClose={handleToggleModal} />
    </div>
  );
};

export default Headers;
