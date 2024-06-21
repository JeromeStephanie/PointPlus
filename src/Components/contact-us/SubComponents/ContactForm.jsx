import React from 'react'
import PhoneInput from './PhoneNumInput'
import { LuSend } from "react-icons/lu";

const ContactForm = () => {
    return (
        <div className='border p-6 rounded-lg drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
            <form action="#" className='flex w-full flex-col gap-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-base font-medium text-black'>First Name:</p>
                        <input className='border border-gray-300 p-[15px] rounded-lg bg-[#f7fafc] leading-tight focus:outline-none focus:shadow-outline' placeholder='Your first name' type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-base font-medium text-black'>Last Name:</p>
                        <input className='border border-gray-300 p-[15px] rounded-lg leading-tight bg-[#f7fafc] focus:outline-none focus:shadow-outline' placeholder='Your first name' type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-medium text-black'>Email:</p>
                    <input className='border bg-[#f7fafc] border-gray-300 p-[15px] rounded-lg leading-tight focus:outline-none focus:shadow-outline' placeholder='youremail@gmail.com' type="email" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-medium text-black'>Phone Number:</p>
                    <PhoneInput />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-medium text-black'>Message:</p>
                    <textarea className='border bg-[#f7fafc] border-gray-300 p-[15px] rounded-lg leading-tight focus:outline-none focus:shadow-outline' placeholder='Type your message here...' type="text" />
                </div>
                <button className='flex items-center justify-center rounded-lg gap-3 bg-[#1E1E1E] drop-shadow-xl shadow-[0px_4px_10px_#00000026] text-white p-[15px]' type="submit">Send Message <LuSend/></button>
            </form>
        </div>
    )
}

export default ContactForm
