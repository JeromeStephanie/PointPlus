import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import CartItems from "../order/cart-items/CartItems";
import { Link, useNavigate } from "react-router-dom";
import SimilarProduct from "../order/similar-product/SimilarProduct";
import { FaArrowLeftLong } from "react-icons/fa6";
import Headers from "../../Helper/Headers";
import Dashboard from "../home/dashboard/Dashboard";

const Order = () => {
  const navigate = useNavigate();
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handleHome = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className="order">
      <Headers handleToggleModal={handleToggleModal} />
      <div className="p-[30px]">
        <div className="w-[100%] flex gap-[40%] mt-[-10px] mb-5 pl-0">
          <div>
            <Link to={"/"}>
              <button>
                <FaChevronLeft size={"1.5rem"} />
              </button>
            </Link>
          </div>
          <div>
            <p className="font-[number:var(--h-3-font-weight)] text-[40px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              Cart
            </p>
          </div>
        </div>
        <div className="Cart flex flex-col gap-[30px] justify-between w-full lg:flex-row xl:flex-row mb-[30px]">
          <div className="w-[100%] h-[400px] overflow-hidden overflow-y-auto xl:w-[70%]">
            <CartItems />
          </div>
          <div className="w-[100%] xl:w-[40%] p-[20px] drop-shadow-xl flex flex-col gap-[20px] shadow-[0px_4px_10px_#00000026] h-[400px] bg-gray-100">
            <h2 className="pb-[20px] font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[20px] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              Cart Summary
            </h2>
            <div className="flex justify-between font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              <p>Sub Total</p>
              <p>N0</p>
            </div>
            <div className="flex justify-between font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              <p>Shipping</p>
              <p>N500</p>
            </div>
            <div className="flex justify-between font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              <p>Discount</p>
              <p>N0</p>
            </div>
            <div className="flex justify-between font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              <p>Total</p>
              <p>N0</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-[60px]">
              <div
                onClick={handleCheckout}
                className="bg-amber-500 cursor-pointer flex justify-center items-center drop-shadow-xl py-[10px] w-[100%] bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]"
              >
                <p>Checkout</p>
              </div>
              <div
                onClick={handleHome}
                className="flex gap-2 justify-center items-center cursor-pointer"
              >
                <FaArrowLeftLong className="text-amber-500" />
                <p className="text-amber-500 py-[10px] font-semibold">
                  Continue Shopping
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-[30px] font-[number:var(--h-3-font-weight)] text-[20px] md:text-[25px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
            Similar Foods
          </p>
          <SimilarProduct />
        </div>

        <Dashboard
          isOpen={isDashboardModalOpen}
          onClose={handleToggleModalClose2}
          handleToggleModal={handleToggleModal}
        />
      </div>
    </div>
  );
};

export default Order;
