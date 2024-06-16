import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsToggleOn } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import Headers from "../../Helper/Headers";
import CardDetails from "../checkout/modals/CardDetails"
import VisaDetails from "../checkout/modals/VisaDetails"
import { masterCard, opay, visa } from "../../Assets";
import Dashboard from "../home/dashboard/Dashboard";

const CheckOut = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handleCheckOutClick = () => {
    // Open the modal only if a payment method is selected
    if (selectedMethod === "card") {
      setIsCardModalOpen(true);
    } else if (selectedMethod === "visa") {
      setIsVisaModalOpen(true);
    } else {
      // Proceed with checkout if no payment method selected
      console.log("Proceeding with checkout...");
    }
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className="w-full min-h-screen">
      <Headers handleToggleModal={handleToggleModal} />
      <div className=" p-[30px]">
        <div className="w-[50%] lg:px-[30px] checkout-icon flex justify-between mt-[-10px] mb-5">
          <div className="flex justify-center items-center">
            <Link to={"/orders"}>
              <FaChevronLeft size={"1.5rem"} />
            </Link>
          </div>
          <div>
            <p className="font-[number:var(--h-3-font-weight)] text-[30px] lg:text-[40px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              Checkout
            </p>
          </div>
        </div>
        <CardDetails
          isOpen={selectedMethod === "card" && isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
        />

        <VisaDetails
          isOpen={selectedMethod === "visa" && isVisaModalOpen}
          onClose={() => setIsVisaModalOpen(false)}
        />
        <form className=" lg:px-[30px] flex flex-col w-full gap-5">
          <div className="flex w-full checkout_flex">
            <div className="delivery_details w-[50%] h-auto">
              <p className="text-left mt-[40px] font-[590] text-[20px]">
                Delivery Details
              </p>
              <div action="#">
                <div className="flex flex-col mt-[20px] text-left w-full">
                  <p className="font-medium">Full Name</p>
                  <input
                    type="text"
                    placeholder="Your full name here"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>

                <div className="flex flex-col row mt-[20px] w-[100%] text-left">
                  <p className="font-medium">Delivery Address</p>
                  <input
                    type="text"
                    placeholder="Input delivery address"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>
                <div className="flex flex-col row mt-[20px] w-[100%] text-left">
                  <p className="font-medium">Town/City</p>
                  <input
                    type="text"
                    placeholder="Input city"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>

                <div className="flex flex-col row mt-[20px] w-[100%] text-left">
                  <p className="font-medium">Postal/Zip Code(Optional)</p>
                  <input
                    type="text"
                    placeholder="Input zip code"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>
                <div className="flex flex-col row mt-[20px] w-[100%] text-left">
                  <p className="font-medium">Contact</p>
                  <input
                    type="text"
                    placeholder="Input contact address"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>

                <div className="flex text-left row mt-[20px]  flex-col w-[100%]">
                  <p className="font-medium">Email Address</p>
                  <input
                    type="text"
                    placeholder="Input email address"
                    className="p-[10px] mt-2 pl-[35px] rounded-[30px] bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <div className="payment_details flex justify-center items-center p-5 w-[50%] max-h-full">
              <div className="bg-gray-100 sticky rounded-[10px] p-6 drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                <p className="text-left lg:font-[590] font-medium  text-[20px]">
                  Payment Methods
                </p>
                <div
                  className={`flex border rounded-[10px] p-3 mt-4 border-white h-auto bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]`}
                  onClick={() => handlePaymentMethodClick("card")}
                >
                  <div className="flex text-left justify-between w-full items-center">
                    <div className="flex gap-6 items-center">
                      <img
                        src={masterCard}
                        className="w-[20%]"
                        alt="mastercard"
                      />
                      <p className="font-[590] text-lg">Card</p>
                    </div>
                    <div className="border mr-1 rounded-[10px] text-gray-200">
                      <FaCircle
                        className={
                          selectedMethod === "card"
                            ? "text-amber-500"
                            : "text-gray-200"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`flex border rounded-[10px] p-3 mt-4 border-white h-auto bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]`}
                  onClick={() => handlePaymentMethodClick("visa")}
                >
                  <div className="flex text-left justify-between w-full items-center">
                    <div className="flex gap-6 items-center">
                      <img src={visa} className="w-[20%]" alt="visa" />
                      <p className="font-[590] text-lg">Visa</p>
                    </div>
                    <div className="mr-1 rounded-[10px] text-gray-200">
                      <FaCircle
                        className={
                          selectedMethod === "visa"
                            ? "text-amber-500"
                            : "text-gray-200"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`flex rounded-[10px] p-3 mt-4 border-white h-auto bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]`}
                  onClick={() => handlePaymentMethodClick("opay")}
                >
                  <div className="flex text-left justify-between items-center w-full">
                    <div className="flex gap-7 items-center">
                      <img src={opay} className="w-[20%]" alt="opay" />
                      <p className="font-[590] text-lg">Opay</p>
                    </div>
                    <div className="mr-1 rounded-[10px] text-gray-200">
                      <FaCircle
                        className={
                          selectedMethod === "opay"
                            ? "text-amber-500"
                            : "text-gray-200"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-between gap-2 items-center mt-[20px]">
              <p className="text-[20px] lg:font-[590] font-medium">Save Delivery Details?</p>
              <BsToggleOn size={"2rem"} className="text-amber-500" />
            </div>
            <div
              onClick={handleCheckOutClick}
              className="bg-amber-500 flex justify-center w-[40%] items-center p-[10px] px-[10%] mt-[20px] font-[590] cursor-pointer drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
            >
              <p>Checkout</p>
            </div>
          </div>
        </form>
        <Dashboard
          isOpen={isDashboardModalOpen}
          onClose={handleToggleModalClose2}
          handleToggleModal={handleToggleModal}
        />
      </div>
    </div>
  );
};

export default CheckOut;
