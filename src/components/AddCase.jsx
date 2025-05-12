import React, { useState } from "react";
import "./NewCase.css"; // Make sure this file exists

function NewCase() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    address: "",
    chiefComplaints: "",
    history: "",
    pastHistory: "",
    familyHistory: "",
    appetite: "",
    phone: "",
    dateOfVisit: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>New Case</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
            {key === "name" || key === "age" || key === "gender" || key === "maritalStatus" || key === "occupation" || key === "address" || key === "phone" || key === "dateOfVisit" ? (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            ) : (
              <textarea
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCase;
