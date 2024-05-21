import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavBar = ({children}) => {
    const location = useLocation();
    const [navBar, setNavBar] = useState(false);

    useEffect(() => {
        console.log("Location", location);
        if (location.pathname === "/aboutus" && "/sidebar") {
          setNavBar(false);
        } else {
          setNavBar(true);
        }
    }, [location]);

  return (
    <div>
       {navBar && children}
    </div>
  )
}

export default ShowNavBar
