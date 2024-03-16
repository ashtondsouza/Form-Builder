import React from "react";

const Email = () => {
  
  return (
    <div className="pt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="border-sky-600 border-b-2 border-dashed p-2 mb-2 w-[350px] text-start  focus:outline-none focus:border-blue-500 "
        required
      />
    </div>
  );
};

export default Email;
