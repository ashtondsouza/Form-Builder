import React, { useState, useEffect } from "react";

const AttributePanel = ({ selectedElementId, onUpdateAttribute }) => {
  const [label, setLabel] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [color, setColor] = useState("");
  const [padding, setPadding] = useState("");

  useEffect(() => {
    const mockData = {
      1: { label: "Input Label", fontSize: "14px", color: "#000000", padding: "10px" },
      2: { label: "Textarea Label", fontSize: "16px", color: "#333333", padding: "15px" },
      3: { label: "Select Label", fontSize: "12px", color: "#666666", padding: "20px" }
    };

    const data = mockData[selectedElementId];
    if (data) {
      setLabel(data.label);
      setFontSize(data.fontSize);
      setColor(data.color);
      setPadding(data.padding);
    } else {
      setLabel("");
      setFontSize("");
      setColor("");
      setPadding("");
    }
  }, [selectedElementId]);

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handlePaddingChange = (e) => {
    setPadding(e.target.value);
  };

  const handleSaveChanges = () => {
    onUpdateAttribute(selectedElementId, { label, fontSize, color, padding });
  };

  return (
    <div className=" attribute-panel w-1/4 bg-gray-200 p-4 rounded-md">
      <h2 className="w-[150px] text-lg font-semibold mb-4">Attributes</h2>
      {selectedElementId ? (
        <div>
          <div className="mb-2 ">
            <label className="block mb-1 font-semibold">Label:</label>
            <input
              type="text"
              value={label}
              onChange={handleLabelChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-semibold">Font Size:</label>
            <input
              type="text"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-semibold">Color:</label>
            <input
              type="text"
              value={color}
              onChange={handleColorChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-semibold">Padding:</label>
            <input
              type="text"
              value={padding}
              onChange={handlePaddingChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow mt-4"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <p className="italic">Select a form element to view its attributes</p>
      )}
    </div>
  );
};

export default AttributePanel;
