import React, { useState } from "react";

const Email = ({ onChange }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    onChange && onChange(value);
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Email;
