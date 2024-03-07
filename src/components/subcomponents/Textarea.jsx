import React, { useState } from "react";

const Textarea = ({ onChange }) => {
  const [label, setLabel] = useState("Textarea");

  const handleChange = (e) => {
    setLabel(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <label>Label:</label>
      <textarea
        placeholder="Textarea"
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
        value={label}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textarea;
