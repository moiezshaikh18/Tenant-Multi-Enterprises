import { useState } from "react";

const FormBuilder = ({ formFields, setFormFields }) => {
  const [fieldType, setFieldType] = useState("");

  const addField = () => {
    setFormFields([...formFields, { type: fieldType, label: fieldType }]);
    setFieldType("");
  };

  return (
    <div className="bg-white p-4 rounded shadow w-96">
      <h2 className="text-xl mb-2">Create Form</h2>
      <select
        className="border p-2 w-full mb-2"
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value)}
      >
        <option value="">Select Field</option>
        <option value="text">Text Input</option>
        <option value="checkbox">Checkbox</option>
        <option value="dropdown">Dropdown</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={addField}
      >
        Add Field
      </button>

      <div className="mt-4">
        {formFields.map((field, index) => (
          <div key={index} className="p-2 border mb-2 rounded">
            {field.type === "text" && (
              <input
                type="text"
                placeholder={field.label}
                className="border p-2 w-full"
              />
            )}
            {field.type === "checkbox" && (
              <label>
                <input type="checkbox" /> {field.label}
              </label>
            )}
            {field.type === "dropdown" && (
              <select className="border p-2 w-full">
                <option>{field.label}</option>
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
