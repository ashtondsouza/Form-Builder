import React, { useState } from "react";
import Canvas from "./Canvas";
import AttributePanel from "./AttributePanel";
import FormElementList from "./FormElementList";
import FormOutput from "./FormOutput";
import html2pdf from "html2pdf.js";

const FormBuilder = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [formElements, setFormElements] = useState([]);

  const handleUpdateAttribute = (id, attributes) => {
    setFormElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, ...attributes } : element
      )
    );
  };

  const handleSelectElement = (element) => {
    setSelectedElement(element);
  };

  const handleUpdateLabel = (label) => {
    if (selectedElement) {
      setSelectedElement({ ...selectedElement, label });
    }
  };

  const handleSaveChanges = (updatedElement) => {
    if (updatedElement) {
      const updatedElements = formElements.map((element) =>
        element.id === updatedElement.id ? updatedElement : element
      );
      setFormElements(updatedElements);
    }
  };

  const handleGeneratePDF = () => {
    const formOutputHTML = document.querySelector(".form-output").outerHTML;
    const element = document.createElement("div");
    element.innerHTML = formOutputHTML;
    html2pdf(element, {
      margin: 1,
      filename: "form_output.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    });
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-sky-500">Form Builder</h1>
      <div className="flex justify-around gap-[40px]">
        <FormElementList onSelect={handleSelectElement} />
        <Canvas
          selectedElement={selectedElement}
          setSelectedElementId={setSelectedElementId}
          formElements={formElements}
          setFormElements={setFormElements}
        />
        <AttributePanel
          selectedElement={selectedElement}
          onUpdateLabel={handleUpdateLabel}
          onSaveChanges={handleSaveChanges}
          selectedElementId={selectedElementId}
          onUpdateAttribute={handleUpdateAttribute}
        />
      </div>
      <button
        className="mt-[50px] ml-[-60px] bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow mt-4"
        onClick={handleGeneratePDF}
      >
        Generate PDF
      </button>
      <FormOutput formElements={formElements} />
    </div>
  );
};

export default FormBuilder;
