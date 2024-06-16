import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const OrderProcess = () => {
    return (
        <section className='flex mt-6 flex-col tracking-wide gap-3 w-full'>
            <div className='border sm:px-9 px-5 py-3 border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-full flex items-center gap-3 lg:gap-9'>
                <FaCircleCheck className='bg-white rounded-full text-gray-400' size={"1.5rem"} />
                <p className='font-normal text-base'>Your Order is been Processed</p>
            </div>
            <div className='border sm:px-9 px-5 py-3 border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-full flex items-center gap-3 lg:gap-9'>
                <FaCircleCheck className='bg-white rounded-full text-gray-400' size={"1.5rem"} />
                <p className='font-normal text-base'>Your Order is on it's Way</p>
            </div>
            <div className='border sm:px-9 px-5 py-3 border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-full flex items-center gap-3 lg:gap-9'>
                <FaCircleCheck className='bg-white rounded-full text-gray-400' size={"1.5rem"} />
                <p className='font-normal text-base'>Your Order has been Delivered</p>
            </div>
        </section>
    )
}

export default OrderProcess
