import { motion } from "framer-motion";
import { useState } from "react";
import SmsForm from "./SmsForm";
import MailForm from "./MailForm";

const LoginModal = ({ isOpen, onClose }) => {
  const [formType, setFormType] = useState("sms");
  return (
    <div>
      {isOpen && (
        <div>
          <div className="fixed top-0 left-0 bg-black/80 w-full h-[100dvh] z-[50]" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{}}
            className="bg-white rounded-[10px] fixed left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] lg:w-[35%] w-[100%] md:w-[50%] h-auto z-[100]"
          >
            {formType === "sms" && (
              <SmsForm onClose={onClose} setFormType={setFormType} />
            )}

            {formType === "mail" && <MailForm onClose={onClose} setFormType={setFormType} />}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
