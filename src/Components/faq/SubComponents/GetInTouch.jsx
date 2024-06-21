import React from 'react'

const GetInTouch = () => {
    return (
        <section className='mt-8 drop-shadow-xl shadow-[0px_4px_10px_#00000026] p-5 flex flex-col rounded-lg gap-3 justify-center items-center bg-gray-100 tracking-wide'>
            <div className='flex gap-3 flex-col justify-center items-center w-full'>
                <p className='font-[590] text-black text-2xl'>Still have a question?</p>
                <p className='text-gray-500 w-full text-center font-medium'>You can submit your question or request through our contact form. Please provide as much details as possible so that we can assist you effectively.</p>
            </div>
            <button className='bg-amber-500 drop-shadow-xl shadow-[0px_4px_10px_#00000026] font-[590] px-3 py-2 rounded-lg text-white'>Contact Us</button>
        </section>
    )
}

export default GetInTouch
