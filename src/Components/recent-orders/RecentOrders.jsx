import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const RecentOrders = () => {

  return (
    <div className="flex flex-col">
      <div className="p-[30px]">
        <NavLink to="/person">
          <FaChevronLeft size={"1.5rem"} />
        </NavLink>
      </div>
      <div>
        <p className="font-[number:var(--h-3-font-weight)] -mt-12 text-[40px] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
          Recent Orders
        </p>
      </div>
    </div>
  );
}

export default RecentOrders
