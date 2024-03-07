import React, { useState } from "react";

const Input = ({ onChange }) => {
  const [label, setLabel] = useState("Input");

  const handleChange = (e) => {
    setLabel(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <label>Label:</label>
      <input
        type="text"
        placeholder="Input"
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
        value={label}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
