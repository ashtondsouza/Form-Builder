import React, { useState } from "react";

const DatePicker = ({ onChange }) => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default DatePicker;
