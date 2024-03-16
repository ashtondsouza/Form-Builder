import React from "react";

const Input = () => {
 
  return (
    <div className="h-20 w-[520px] bg-white border-[2px] border-solid border-sky-200">
      <input
        type="text"
        placeholder="Enter here"
        className="border-sky-600 border-b-2 border-dashed p-2 mb-2 w-[350px] text-start  focus:outline-none focus:border-blue-500"
        
      />
    </div>
  );
};

export default Input;
