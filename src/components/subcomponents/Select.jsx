import React, { useState } from "react";

const Select = ({ onChange }) => {
  const [label, setLabel] = useState("Select");

  const handleChange = (e) => {
    setLabel(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <label>Label:</label>
      <select
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
        value={label}
        onChange={handleChange}
      >
        <option value="Select">Select</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
};

export default Select;
