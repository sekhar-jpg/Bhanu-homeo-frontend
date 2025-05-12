import React, { useState } from "react";

function NewCaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    address: "",
    phone: "",
    dateOfVisit: "",
    chiefComplaints: "",
    history: "",
    pastHistory: "",
    familyHistory: "",
    appetite: "",
    cravings: "",
    thirst: "",
    bowel: "",
    urine: "",
    sleep: "",
    dreams: "",
    sweat: "",
    thermal: "",
    habits: "",
    menstrual: "",
    mental: "",
    remarks: "",
    doctorObservations: "",
    prescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Submit logic here (API call etc.)
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">New Case</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "age", "gender", "maritalStatus", "occupation", "address",
          "phone", "dateOfVisit", "chiefComplaints", "history", "pastHistory", "familyHistory",
          "appetite", "cravings", "thirst", "bowel", "urine", "sleep",
          "dreams", "sweat", "thermal", "habits", "menstrual", "mental",
          "remarks", "doctorObservations", "prescription"
        ].map((field) => (
          <div key={field}>
            {["chiefComplaints", "history", "pastHistory", "familyHistory", "appetite", "cravings", "thirst", "bowel", "urine", "sleep", "dreams", "sweat", "thermal", "habits", "menstrual", "mental", "remarks", "doctorObservations", "prescription"].includes(field) ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                className="w-full border p-2 rounded"
              />
            ) : (
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                className="w-full border p-2 rounded"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCaseForm;
