import React, { useState } from "react";

const FileInput = ({ onChange }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onChange && onChange(selectedFile);
  };

  return (
    <div>
      <label>Upload File:</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FileInput;
