import React from "react";

const FormOutput = ({ formElements }) => {
  return (
    <div className="form-output mt-[20px] ">
      <form>
        {formElements.map((element) => (
          <div key={element.id} className="p-[10px]">
            <label htmlFor={`element-${element.id}`}>{element.label}</label>
            {element.type === "input" && (
              <input type="text" id={`element-${element.id}`} />
            )}
            {element.type === "textarea" && (
              <textarea id={`element-${element.id}`} />
            )}
            {element.type === "select" && (
              <select id={`element-${element.id}`}>
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            )}
            {element.type === "checkbox" && (
              <input type="checkbox" id={`element-${element.id}`} />
            )}
            {element.type === "date-picker" && (
              <input type="date" id={`element-${element.id}`} />
            )}
            {element.type === "email" && (
              <input type="email" id={`element-${element.id}`} />
            )}
            {element.type === "file-input" && (
              <input type="file" id={`element-${element.id}`} />
            )}
            {element.type === "phone" && (
              <input type="tel" id={`element-${element.id}`} />
            )}
            {element.type === "radio" && (
              <div>
                <input type="radio" id={`element-${element.id}-option1`} name={`element-${element.id}`} />
                <label htmlFor={`element-${element.id}-option1`}>Option 1</label>
                <input type="radio" id={`element-${element.id}-option2`} name={`element-${element.id}`} />
                <label htmlFor={`element-${element.id}-option2`}>Option 2</label>
              </div>
            )}
            {element.type === "time-picker" && (
              <input type="time" id={`element-${element.id}`} />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormOutput;
