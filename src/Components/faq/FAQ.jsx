import React from 'react'
import AboutUSHeader from '../about-us/nav-link/AboutUSHeader'
import IntroText from './SubComponents/IntroText'
import Content from './SubComponents/Content'

const FAQ = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            <AboutUSHeader />
            <div className='flex mt-[50px] w-full h-[500px] overflow-hidden'>
                <div className='w-[40%] flex justify-center items-center'>
                    <IntroText />
                </div>
                <div className='w-[60%] overflow-y-auto'>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default FAQ
