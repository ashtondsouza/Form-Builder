import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import Input from "./subcomponents/Input";
import Textarea from "./subcomponents/Textarea";
import Select from "./subcomponents/Select";
import Checkbox from "./subcomponents/Checkbox";
import DatePicker from "./subcomponents/DatePicker";
import Email from "./subcomponents/Email";
import FileInput from "./subcomponents/FileInput";
import Phone from "./subcomponents/Phone";
import Radio from "./subcomponents/Radio";
import TimePicker from "./subcomponents/TimePicker";

const Canvas = ({ onSelect, setSelectedElementId, formElements, setFormElements }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const elementType = event.dataTransfer.getData("text/plain");
    const newElement = { id: formElements.length + 1, type: elementType, label: elementType };
    setFormElements([...formElements, newElement]);
  };

  const handleDelete = (id) => {
    setFormElements(formElements.filter((element) => element.id !== id));
  };

  const handleSelect = (id) => {
    setSelectedElementId(id);
    onSelect && onSelect(id);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex">
      <div className="w-[650px] bg-gray-200 p-4" onDrop={handleDrop} onDragOver={allowDrop}>
        <h2 className="text-lg font-semibold mb-4">Canvas</h2>
        <div className="border border-dashed border-gray-300 p-4 rounded-md">
          {formElements.map((element) => {
            let ElementComponent;
            switch (element.type) {
              case "input":
                ElementComponent = Input;
                break;
              case "textarea":
                ElementComponent = Textarea;
                break;
              case "select":
                ElementComponent = Select;
                break;
              case "checkbox":
                ElementComponent = Checkbox;
                break;
              case "date-picker":
                ElementComponent = DatePicker;
                break;
              case "email":
                ElementComponent = Email;
                break;
              case "file-input":
                ElementComponent = FileInput;
                break;
              case "phone":
                ElementComponent = Phone;
                break;
              case "radio":
                ElementComponent = Radio;
                break;
              case "time-picker":
                ElementComponent = TimePicker;
                break;
              default:
                return null;
            }
            return (
              <div key={element.id} className="relative mb-4">
                <ElementComponent label={element.label} onChange={(value) => handleLabelChange(element.id, value)} />
                <div className="absolute top-0 right-0 -mt-2 mr-2 flex">
                  <button
                    className="bg-blue-500 text-white p-1 rounded-full mr-1"
                    onClick={() => handleSelect(element.id)}
                  >
                    <FaGear />
                  </button>
                  <button
                    className="bg-red-400 text-white p-1 rounded-full"
                    onClick={() => handleDelete(element.id)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
