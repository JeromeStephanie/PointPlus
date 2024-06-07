import React from 'react'

const IntroText = () => {
  return (
    <section className='flex flex-col gap-[15px] tracking-wide'>
      <h1 className='text-4xl font-semibold'>FAQ</h1>
      <p className='text-lg font-semibold'>Frequency Asked Questions</p>
      <p className='text-lg font-semibold cursor-pointer'>How do I create an PointPlus Delivery account?</p>
      <p className='text-lg font-semibold cursor-pointer'>I forgot my password. How can I reset it?</p>
    </section>
  )
}

export default IntroText
