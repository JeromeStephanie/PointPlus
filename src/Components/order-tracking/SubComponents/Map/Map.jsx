import React, { useState } from 'react'
import Dashboard from '../../../home/dashboard/Dashboard'
import Headers from '../../../../Helper/Headers';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Map = () => {
    const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

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
            </div>
            <Dashboard
                isOpen={isDashboardModalOpen}
                onClose={handleToggleModalClose2}
                handleToggleModal={handleToggleModal}
            />
        </div>
    )
}

export default Map
