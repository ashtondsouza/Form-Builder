import React from "react";

const AddRadio = ({ label, checked, onChange }) => {
  const handleRadioChange = (e) => {
    const isChecked = e.target.checked;
    onChange && onChange(isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={checked}
          onChange={handleRadioChange}
        />
        {label}
        
      </label>
    </div>
  );
};

export default AddRadio;
