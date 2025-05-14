import React, { useState } from "react";

const CaseSheetForm = () => {
  const [caseData, setCaseData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    address: "",
    phone: "",
    dateOfVisit: "",
    image: null,
    // other fields...
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setCaseData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧾 New Case Entry</h2>

      {/* Face Upload */}
      <div>
        <label>Upload Face Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {caseData.image && (
          <img
            src={URL.createObjectURL(caseData.image)}
            alt="Preview"
            width="100"
            style={{ marginTop: "10px", borderRadius: "8px" }}
          />
        )}
      </div>

      {/* Basic Info */}
      <h3>1. Basic Patient Information</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={caseData.name}
            onChange={handleInputChange}
            placeholder="Enter patient name"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={caseData.age}
            onChange={handleInputChange}
            placeholder="e.g. 35"
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={caseData.gender} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Marital Status:</label>
          <input
            type="text"
            name="maritalStatus"
            value={caseData.maritalStatus}
            onChange={handleInputChange}
            placeholder="e.g. Married / Unmarried"
          />
        </div>
        <div>
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={caseData.occupation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={caseData.address}
            onChange={handleInputChange}
            placeholder="Full address"
          />
        </div>
        <div>
          <label>Phone / WhatsApp:</label>
          <input
            type="text"
            name="phone"
            value={caseData.phone}
            onChange={handleInputChange}
            placeholder="e.g. 9876543210"
          />
        </div>
        <div>
          <label>Date of Visit:</label>
          <input
            type="date"
            name="dateOfVisit"
            value={caseData.dateOfVisit}
            onChange={handleInputChange}
          />
        </div>
      </div>
