import React from 'react'
import AboutUSHeader from '../about-us/nav-link/AboutUSHeader'
import IntroText from './SubComponents/IntroText'
import Content from './SubComponents/Content'

const FAQ = () => {
    return (
        <div className=''>
            <AboutUSHeader />
            <div className=''>
                <div><IntroText /></div>
                <div><Content /></div>
            </div>
        </div>
    )
}

export default FAQ
