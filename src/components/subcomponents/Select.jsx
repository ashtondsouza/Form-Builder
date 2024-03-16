import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

const Select = ({ onChange }) => {
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setLabel(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleAddOption = () => {
    if (label.trim() !== "") {
      setOptions([...options, label.trim()]);
      setLabel(""); 
    }
  };


  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
        value={label}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Option"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border-solid border-b-2 border-sky-600"
        />
        <button className="text-green-600 text-xl" onClick={handleAddOption}><MdLibraryAdd /></button>
      </div>
     
    </div>
  );
};

export default Select;
