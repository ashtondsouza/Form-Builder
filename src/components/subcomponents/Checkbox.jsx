import React, { useState } from "react";
import { MdLibraryAdd, MdDelete } from "react-icons/md";

const Checkbox = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [newCheckboxLabel, setNewCheckboxLabel] = useState("");

  const handleAddCheckbox = () => {
    if (newCheckboxLabel.trim() !== "") {
      const newCheckbox = { id: checkboxes.length + 1, label: newCheckboxLabel.trim() };
      setCheckboxes([...checkboxes, newCheckbox]);
      setNewCheckboxLabel(""); 
    }
  };

  const handleLabelChange = (e) => {
    setNewCheckboxLabel(e.target.value);
  };

  const handleDeleteCheckbox = (id) => {
    setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
  };

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="flex h-6 w-auto items-center gap-1 mb-2">
          <input  type="checkbox" />
          <label>{checkbox.label}</label>
          <button className='text-red-400' onClick={() => handleDeleteCheckbox(checkbox.id)}><MdDelete /></button>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter Checkbox Label"
          value={newCheckboxLabel}
          onChange={handleLabelChange}
          className="border-solid border-b-2 border-sky-600"
        />
        <button className="text-green-600 text-xl" onClick={handleAddCheckbox}><MdLibraryAdd /></button>
      </div>
    </div>
  );
};

export default Checkbox;
