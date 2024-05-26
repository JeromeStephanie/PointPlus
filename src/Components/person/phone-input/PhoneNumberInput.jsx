import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        country={"ng"} // You can set a default country
        value={phone}
        onChange={(phone) => setPhone(phone)}
        countryCodeEditable={false} // Prevents editing the country code
        inputStyle={{
          width: "100%",
          height: "50px",
          padding: "15px",
          borderRadius: "20px",
          cursor: "text",
          paddingLeft: "90px",
          color: "black", // Set the text color to black
          caretColor: "black",
        }}
        buttonStyle={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "20px 0 0 20px",
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
