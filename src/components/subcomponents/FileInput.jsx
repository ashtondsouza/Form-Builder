import React from "react";

const FileInput = () => {
  
  return (
    <div>
      <label>Upload File:</label>
      <input
        type="file"
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FileInput;
