import React, { useState } from "react";
import { MdLibraryAdd, MdDelete } from "react-icons/md";

const Radio = () => {
  const [radios, setRadios] = useState([]);
  const [newRadioLabel, setNewRadioLabel] = useState("");

  const handleAddRadio = () => {
    if (newRadioLabel.trim() !== "") {
      const newRadio = { id: radios.length + 1, label: newRadioLabel.trim() };
      setRadios([...radios, newRadio]);
      setNewRadioLabel(""); 
    }
  };

  const handleLabelChange = (e) => {
    setNewRadioLabel(e.target.value);
  };

  const handleDeleteRadio = (id) => {
    setRadios(radios.filter((radio) => radio.id !== id));
  };

  return (
    <div>
      {radios.map((radio) => (
        <div key={radio.id} className="flex h-6 w-auto items-center gap-1 mb-2">
          <input  type="radio" />
          <label>{radio.label}</label>
          <button className='text-red-400' onClick={() => handleDeleteRadio(radio.id)}><MdDelete /></button>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter Checkbox Label"
          value={newRadioLabel}
          onChange={handleLabelChange}
          className="border-solid border-b-2 border-sky-600"
        />
        <button className="text-green-600 text-xl" onClick={handleAddRadio}><MdLibraryAdd /></button>
      </div>
    </div>
  );
};

export default Radio;
