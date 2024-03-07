import React, { useState } from "react";

const Phone = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    onChange && onChange(value);
  };

  return (
    <div>
      <label>Phone Number:</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Phone;
