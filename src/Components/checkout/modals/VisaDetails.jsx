import React, { useState } from "react";
import SuccessModal from "../modals/SuccessModal";
import { FaRegCreditCard } from "react-icons/fa6";
import { TiCalendar } from "react-icons/ti";
import { FiLock } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsToggle2On } from "react-icons/bs";
import { visa2 } from "../../../Assets";

const VisaDetails = ({ isOpen, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value.replace(/[^\d]/g, "").substring(0, 16));
  };

  const handleExpiryDateChange = (event) => {
    const formattedDate = event.target.value
      .replace(/[^\d]/g, "")
      .substring(0, 4)
      .replace(/(\d{2})(\d{0,2})/, "$1/$2");
    setExpiryDate(formattedDate);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value.replace(/[^\d]/g, "").substring(0, 3));
  };

  const handleCheckout = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={handleSuccessModalClose}
          />
          <form className="modal-content card_details rounded-[20px] p-[20px] px-[40px] h-auto flex-col w-auto overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <div className="w-full pl-[150px]">
              <img src={visa2} className="w-[40%]" alt="visa" />
            </div>

            <div className="border bg-gray-200 mt-[20px] rounded-[20px] p-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
              <div className="text-left">
                <p className="font-[590]">Card Number</p>
                <div className="flex my-3 bg-white items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] appearance-none border rounded-[20px]">
                  <div className="p-[10px]">
                    <FaRegCreditCard />
                  </div>
                  <input
                    type="text"
                    id="cardNumber"
                    className=" w-full py-2 px-2 rounded-[20px] border-r text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Input card number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 text-left">
                <div>
                  <p className="font-[590]">Expiry Date</p>
                  <div className="bg-white flex my-3 items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]  focus:border-amber-500  border rounded-[20px]">
                    <div className="p-[10px]">
                      <TiCalendar />
                    </div>
                    <input
                      type="text"
                      id="expiryDate"
                      className="w-full py-2 px-2 rounded-[20px] border-r text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="**/**"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-[590]">CVV</p>
                  <div className="flex bg-white my-3 items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] appearance-none border rounded-[20px]">
                    <div className="p-[10px]">
                      <FiLock />
                    </div>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full py-2 px-2 rounded-[20px] border-r text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="***"
                      value={cvv}
                      onChange={handleCVVChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span
              onClick={onClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
            <div className="flex w-full justify-between items-center my-[20px]">
              <p className="font-[590]">Save Card Details</p>
              <div className="bg-white text-amber-500">
                <BsToggle2On size={"1.5rem"} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <p
                onClick={onClose}
                className="font-[590] text-amber-500 cursor-pointer"
              >
                Use Another Payment Method?
              </p>
              <div
                onClick={handleCheckout}
                className="flex justify-center py-3 w-[50%] cursor-pointer items-center bg-amber-500 px-2 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]"
              >
                Checkout
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
