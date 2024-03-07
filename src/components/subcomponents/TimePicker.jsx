import React, { useState } from "react";

const TimePicker = ({ onChange }) => {
  const [time, setTime] = useState("");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <label>Time:</label>
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TimePicker;
