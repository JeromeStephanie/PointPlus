import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {

  return (
    <div>
      {isOpen && (
        <>

        <div className="overlay" /> {/*dark drop background*/}

          <div className="modal bg-white w-[50%] h-[200px] z-10">
            we are good
            <p onClick={onClose}
            >close</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginModal;
