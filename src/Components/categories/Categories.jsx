import React, { useState } from 'react'
import Headers from '../../Helper/Headers'
import Dashboard from '../home/dashboard/Dashboard';

const Categories = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className='w-full'>
      <Headers handleToggleModal={handleToggleModal} />
      Categories
      <Dashboard
        isOpen={isDashboardModalOpen}
        onClose={handleToggleModalClose2}
        handleToggleModal={handleToggleModal}
      />
    </div>
  )
}

export default Categories
