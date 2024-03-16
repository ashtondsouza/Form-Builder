import React from "react";

const Textarea = () => {
 
  return (
    <div >
      <textarea
        placeholder="Enter text here"
        className=" h-auto w-[520px] border border-sky-200 p-1 mb-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Textarea;
