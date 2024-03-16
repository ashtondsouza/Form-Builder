import React from "react";

const FormElementList = ({ onSelect }) => {
  const handleDragStart = (event, element) => {
    event.dataTransfer.setData("text/plain", element.id);
  };

  const formElements = [
    { id: "input", label: "Input" },
    { id: "textarea", label: "Textarea" },
    { id: "select", label: "Select" },
    { id: "checkbox", label: "Checkbox" },
    { id: "date-picker", label: "Date Picker" },
    { id: "email", label: "Email" },
    { id: "file-input", label: "File Input" },
    { id: "phone", label: "Phone" },
    { id: "radio", label: "Radio" },
    { id: "time-picker", label: "Time Picker" },
  ];

  return (
    <div className="w-[200px] bg-gray-100 p-4 border border-1 border-black border-solid shadow-md">
      <h2 className="w-[150px] text-lg font-semibold mb-4">Form Elements</h2>
      <div className="space-y-2">
        {formElements.map((element) => (
          <div
            key={element.id}
            className="bg-white p-2 rounded shadow cursor-pointer hover:bg-gray-200"
            draggable={true}
            onDragStart={(event) => handleDragStart(event, element)}
            onClick={() => onSelect && onSelect(element.id)} 
          >
            {element.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormElementList;
