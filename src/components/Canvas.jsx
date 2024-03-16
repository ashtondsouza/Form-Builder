import React,{useState} from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrBold } from "react-icons/gr";
import { RiItalic } from "react-icons/ri";
import { RiUnderline } from "react-icons/ri";
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

const Canvas = ({ formElements, setFormElements }) => {

  const [onEdit, setOnEdit] = useState(false);
  const [editedField, setEditedField] = useState("");
  const [boldState, setBoldState] = useState({});
  const [italicState, setItalicState] = useState({});
  const [underlineState, setUnderlineState] = useState({});
    const handleBoldClick = (id) => {
      setBoldState((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };
  
    const handleItalicClick = (id) => {
      setItalicState((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };
  
    const handleUnderlineClick = (id) => {
      setUnderlineState((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };

  const editField = (fieldName, fieldLabel) => {
    const formFields = [...formElements];
    const fieldIndex = formFields.findIndex(f => f.id === fieldName);
    if (fieldIndex > -1) {
        formFields[fieldIndex].label = fieldLabel;
        setFormElements(formFields);
    }
}
const handleDrop = (event) => {
  event.preventDefault();
  const elementType = event.dataTransfer.getData("text/plain");
  const newElement = { id: formElements.length + 1, type: elementType, label: elementType };
  setFormElements([...formElements, newElement]);
};


  const handleDelete = (id) => {
    setFormElements(formElements.filter((element) => element.id !== id));
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };


  return (
    <div className="flex">
      <div className="w-[650px] bg-gray-200 p-4 shadow-xl border border-1 border-solid border-black"   onDrop={handleDrop} onDragOver={allowDrop}>
        <h2 className="text-lg font-semibold mb-4">Canvas</h2>
        <div className="border border-solid border-1 border-sky-500 bg-gray-100 p-4 rounded-md shadow-md">
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
              <div key={element.id} 

              className='relative mb-4 w-auto h-auto'>
                
                {onEdit && editedField === element.id ? (
                 <>
                 <input
                   className="mb-6 p-[6px] w-[520px] border-sky-600 border-b-4"
                   type="text"
                   style={{
                     fontWeight: boldState[element.id] ? "bold" : "normal",
                     fontStyle: italicState[element.id] ? "italic" : "normal",
                     textDecoration: underlineState[element.id] ? "underline" : "none"
                   }}
                   value={element.label}
                   onChange={(e) => editField(element.id, e.target.value)}
                   onBlur={() => {
                     setOnEdit(false);
                     setEditedField("");
                   }}
                 />
                 <div className=" ">
                   <ul className="flex ml-6 gap-1 absolute top-[42px] ">
                   <li className={`border-[1px] border-solid border-sky-500 bg-gray-200 w-[35px] h-[30px] flex justify-center ${boldState[element.id] ? 'bg-blue-200' : ''}`}>
                          <button onClick={() => handleBoldClick(element.id)}><GrBold /></button>
                        </li>
                        <li className={`border-[1px] border-solid border-sky-500 bg-gray-200 w-[35px] h-[30px] flex justify-center ${italicState[element.id] ? 'bg-blue-200' : ''}`}>
                          <button onClick={() => handleItalicClick(element.id)}><RiItalic /></button>
                        </li>
                        <li className={`border-[1px] border-solid border-sky-500 bg-gray-200 w-[35px] h-[30px] flex justify-center ${underlineState[element.id] ? 'bg-blue-200' : ''}`}>
                          <button onClick={() => handleUnderlineClick(element.id)}><RiUnderline /></button>
                        </li>
                   </ul>
                 </div>
               </>
                ) : (
                  <label
                    onClick={() => {
                      setOnEdit(true);
                      setEditedField(element.id);
                
                    
                    }}
                  >
                    <div
                      className={`mb-2 p-[6px] w-[520px] border-sky-600 border-b-4 bg-white ${
                        boldState[element.id] ? "bold " : ""
                      }${italicState[element.id] ? "italic " : ""}${underlineState[element.id] ? "underline" : ""}`}
                    >
                      {element.label || "Untiled Question"}
                    </div>
                  </label>
                  
                )}
               
                <ElementComponent />
                <div className="flex items-center justify-end mt-2 ">
                  <input
                    type="checkbox"
                    checked={element.required}
                    onChange={() => toggleRequired(element.id)}
                    className="mr-2"
                  />
                  <label className="text-gray-600">Required</label>
                </div>

                <div className="absolute top-0 right-0 -mt-2 mr-2 flex">
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
