import React from "react";

const AddCheckbox = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    onChange && onChange(isChecked);
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
    </div>
  );
};

export default AddCheckbox;
