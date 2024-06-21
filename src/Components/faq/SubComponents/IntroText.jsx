import React from 'react'

const IntroText = () => {
  return (
    <section className='flex text-center w-full px-[10px] sm:px-[50px] flex-col justify-center items-start gap-[15px] tracking-wide'>
      <div className='flex justify-center items-center flex-col gap-4 w-full'>
        <h1 className='text-sm flex justify-center p-2 items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] bg-gray-100 rounded-lg w-16 font-[590]'>FAQ</h1>
        <p className='sm:text-5xl text-3xl font-[590] text-center'>Frequency Asked Questions</p>
      </div>
      <p className='text-lg text-center font-medium text-gray-500'>Welcome to Our FAQ page! We've compiled a list of commonly asked questions to provide you with quick and informative answers.</p>
    </section>
  )
}

export default IntroText
