import { useState } from "react";
import tenants from "../src/config/tenant.js";
import FormBuilder from "../src/FormBuilder.jsx";

const getTenant = () => {
  return tenants[import.meta.env.VITE_TENANT] || tenants["companyA"];
};

export default function App() {
  const tenant = getTenant();
  const [formFields, setFormFields] = useState([]);

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: tenant.themeColor }}
    >
      <img
        src={tenant.logo}
        alt={`${tenant.name} Logo`}
        className="w-20 my-4"
      />
      <h1 className="text-white text-2xl">{tenant.name} - Form Builder</h1>
      <FormBuilder formFields={formFields} setFormFields={setFormFields} />
    </div>
  );
}
