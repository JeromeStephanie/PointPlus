import React, { useState } from 'react'
import Headers from '../../Helper/Headers'
import Dashboard from '../home/dashboard/Dashboard'
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa6';
import { Track } from '../../Assets';
import OrderProcess from './SubComponents/OrderProcess';

const OrderTracking = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleTrackMap = () => {
    navigate("/map");
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div>
      <Headers handleToggleModal={handleToggleModal} />
      <div className="p-[20px] lg:p-[50px]">
        <div className="flex items-center gap-[50px] sm:justify-between w-full sm:w-[50%]">
          <Link to={"/"}>
            <FaChevronLeft size={"1.5rem"} />
          </Link>
          <p className="font-[number:var(--h-3-font-weight)] text-[24px] text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
            Order Tracking
          </p>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='flex w-[250px] h-[250px] justify-center items-center'>
            <img src={Track} alt="Track" />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col justify-start'>
            <span className='font-[590] text-lg'>Est. Delivery Time</span>
            <span className='font-normal'>30 Minutes</span>
          </div>
          <div className='flex flex-col text-right'>
            <span className='font-[590] text-lg'>Order ID</span>
            <span className='font-normal'>#123456789</span>
          </div>
        </div>
        <OrderProcess />
        <div className='flex mt-6 flex-col justify-start w-full lg:w-[15%]'>
          <span className='font-[590] text-lg'>Delivery Address</span>
          <span className='font-normal'>123 City Avenue, Ojo Lagos State</span>
        </div>
        <div className='flex justify-center items-center mt-6'>
          <button onClick={handleTrackMap}
            className="bg-amber-500 cursor-pointer flex justify-center w-[100%] sm:w-[50%] items-center drop-shadow-xl py-[10px] bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]"
          >
            View Map
          </button>
        </div>
      </div>

      <Dashboard
        isOpen={isDashboardModalOpen}
        onClose={handleToggleModalClose2}
        handleToggleModal={handleToggleModal}
      />
    </div>
  )
}

export default OrderTracking
