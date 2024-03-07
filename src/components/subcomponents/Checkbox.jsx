import React, { useState } from "react";

const Checkbox = ({ onChange }) => {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState("Checkbox");

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    onChange && onChange({ checked: e.target.checked, label });
  };

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
    onChange && onChange({ checked, label: e.target.value });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
      <input
        type="text"
        placeholder="Label"
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
        value={label}
        onChange={handleLabelChange}
      />
    </div>
  );
};

export default Checkbox;
