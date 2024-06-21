import React, { useState } from 'react'
import AboutUSHeader from '../about-us/nav-link/AboutUSHeader'
import Dashboard from '../about-us/dashboard/Dashboard';
import ContactInfo from './SubComponents/ContactInfo';
import ContactForm from './SubComponents/ContactForm';

const ContactUs = () => {
    const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsDashboardModalOpen(true); // Always open the Dashboard
    };

    const handleToggleModalClose = () => {
        setIsDashboardModalOpen(false); // Close the Dashboard
    };

    return (
        <div>
            <AboutUSHeader handleToggleModal={handleToggleModal} />
            <div className='grid p-[30px] lg:px-[50px] gap-9 grid-cols-1 sm:grid-cols-2'>
                <ContactInfo />
                <ContactForm />
            </div>
            <Dashboard isOpen={isDashboardModalOpen} onClose={handleToggleModalClose} />
        </div>
    )
}

export default ContactUs
