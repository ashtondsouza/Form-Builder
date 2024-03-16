import React from "react";

const Phone = () => {
 
  return (
    <div className="mt-4">
      <input
        type="tel"
        placeholder="Enter phone number"
        className="border-sky-600 border-b-2 border-dashed p-2 mb-2 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
  );
};

export default Phone;
