import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className='flex flex-col w-full justify-between'>
            <div className='flex justify-start w-full flex-col gap-4'>
                <p className='font-[590] text-3xl sm:text-5xl text-black'>Contact Us</p>
                <p className='text-black font-medium w-full lg:w-[70%] text-lg'>Any questions? We would be happy to help you! </p>
            </div>
            <div className='border w-full border-white rounded-lg drop-shadow-xl shadow-[0px_4px_10px_#00000026] mt-8 p-6 flex flex-col gap-6'>
                <div className='flex justify-start items-center gap-3'>
                    <FiPhone size={"1.2rem"}/>
                    <p className='text-base font-medium'>+234667765576</p>
                </div>
                <div className='flex border drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-lg p-2 bg-[#1E1E1E] text-white justify-start items-center gap-3'>
                    <MdOutlineMailOutline size={"1.2rem"} />
                    <p className='text-base font-medium'>pointplusdelivery@gmail.com</p>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <GrLocation size={"1.2rem"} />
                    <p className='text-base font-medium'>322 Road E Close, Festac, Lagos</p>
                </div>
            </div>
            <div className='flex mt-8 gap-6'>
                <div className='bg-[#1E1E1E] drop-shadow-xl shadow-[0px_4px_10px_#00000026] hover:text-gray-400 text-white rounded-full p-2'>
                <FaFacebookF size={"1.2rem"}/>
                </div>
                <div className='bg-[#1E1E1E] drop-shadow-xl shadow-[0px_4px_10px_#00000026] hover:text-gray-400 text-white rounded-full p-2'>
                <FaXTwitter size={"1.2rem"}/>
                </div>
                <div className='bg-[#1E1E1E] drop-shadow-xl shadow-[0px_4px_10px_#00000026] hover:text-gray-400 text-white rounded-full p-2'>
                <FaLinkedinIn size={"1.2rem"}/>
                </div>
                <div className='bg-[#1E1E1E] drop-shadow-xl shadow-[0px_4px_10px_#00000026] hover:text-gray-400 text-white rounded-full p-2'>
                <FaInstagram size={"1.2rem"}/>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
