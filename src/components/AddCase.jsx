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
      <div className="form-group">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
        <input type="text" name="maritalStatus" placeholder="Marital Status" onChange={handleChange} />
        <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <input type="date" name="dateOfVisit" placeholder="Date of Visit" onChange={handleChange} />
        <textarea name="chiefComplaints" placeholder="Chief Complaints" onChange={handleChange} />
        <textarea name="history" placeholder="History of Present Illness" onChange={handleChange} />
        <textarea name="pastHistory" placeholder="Past History" onChange={handleChange} />
        <textarea name="familyHistory" placeholder="Family History" onChange={handleChange} />
        <textarea name="appetite" placeholder="Appetite" onChange={handleChange} />
        <textarea name="cravings" placeholder="Cravings & Aversions" onChange={handleChange} />
        <textarea name="thirst" placeholder="Thirst" onChange={handleChange} />
        <textarea name="bowel" placeholder="Bowel" onChange={handleChange} />
        <textarea name="urine" placeholder="Urine" onChange={handleChange} />
        <textarea name="sleep" placeholder="Sleep" onChange={handleChange} />
        <textarea name="dreams" placeholder="Dreams" onChange={handleChange} />
        <textarea name="sweat" placeholder="Sweat" onChange={handleChange} />
        <textarea name="thermal" placeholder="Thermal Nature (Hot/Cold)" onChange={handleChange} />
        <textarea name="habits" placeholder="Habits" onChange={handleChange} />
        <textarea name="menstrual" placeholder="Menstrual History (if applicable)" onChange={handleChange} />
        <textarea name="mental" placeholder="Mental Symptoms" onChange={handleChange} />
        <textarea name="remarks" placeholder="General Remarks" onChange={handleChange} />
        <textarea name="doctorObservations" placeholder="Doctor Observations" onChange={handleChange} />
        <textarea name="prescription" placeholder="Prescription" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);
