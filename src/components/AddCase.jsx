import React, { useState } from "react";
import "./App.css"; // Or update this path if you're using a different CSS file

const NewCase = () => {
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
    presentIllness: "",
    pastHistory: "",
    familyHistory: "",
    appetite: "",
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
    // Submit logic here
  };

  return (
    <div className="form-container">
      <h2>New Case</h2>
      <form onSubmit={handleSubmit}>
        {/* Row: Name, Age, Gender */}
        <div className="row-flex">
          <div className="field-box">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="field-box">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="field-box">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Vertical Fields */}
        <div className="form-group">
          <label>Marital Status</label>
          <input
            type="text"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          />

          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Date of Visit</label>
          <input
            type="date"
            name="dateOfVisit"
            value={formData.dateOfVisit}
            onChange={handleChange}
          />

          <label>Chief Complaints</label>
          <textarea
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleChange}
          />

          <label>History of Present Illness</label>
          <textarea
            name="presentIllness"
            value={formData.presentIllness}
            onChange={handleChange}
          />

          <label>Past History</label>
          <textarea
            name="pastHistory"
            value={formData.pastHistory}
            onChange={handleChange}
          />

          <label>Family History</label>
          <textarea
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
          />

          <label>Appetite</label>
          <textarea
            name="appetite"
            value={formData.appetite}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCase;
