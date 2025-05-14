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
    chiefComplaints: [{ complaint: "", duration: "", description: "" }],
    presentIllness: "",
    pastHistory: {
      childhoodDiseases: "",
      surgeriesInjuries: "",
      majorIllnesses: "",
    },
    familyHistory: "",
    personalHistory: {
      appetite: "",
      cravingsAversions: "",
      thirst: "",
      bowel: "",
      urine: "",
      sleep: "",
      dreams: "",
      sweat: "",
      thermal: "",
      habits: "",
      menstrual: "",
    },
    mentalSymptoms: "",
    generalRemarks: "",
    observationsByDoctor: "",
    prescription: [{ date: "", remedyName: "", potency: "", dose: "" }],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseData({ ...caseData, [name]: value });
  };

  const handleChiefComplaintChange = (index, e) => {
    const { name, value } = e.target;
    const updatedComplaints = [...caseData.chiefComplaints];
    updatedComplaints[index][name] = value;
    setCaseData({ ...caseData, chiefComplaints: updatedComplaints });
  };

  const addChiefComplaint = () => {
    setCaseData({
      ...caseData,
      chiefComplaints: [...caseData.chiefComplaints, { complaint: "", duration: "", description: "" }],
    });
  };

  const handlePrescriptionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrescriptions = [...caseData.prescription];
    updatedPrescriptions[index][name] = value;
    setCaseData({ ...caseData, prescription: updatedPrescriptions });
  };

  const addPrescription = () => {
    setCaseData({
      ...caseData,
      prescription: [...caseData.prescription, { date: "", remedyName: "", potency: "", dose: "" }],
    });
  };

  const handleImageUpload = (e) => {
    setCaseData({ ...caseData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Case data submitted:", caseData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Case Sheet</h2>

      {/* Image Upload */}
      <div>
        <label>Upload Face Image: </label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <p>{caseData.image ? caseData.image.name : "No file chosen"}</p>
      </div>

      {/* Basic Info */}
      <h3>Basic Information</h3>
      <div>
        <label>Name:</label>
        <input
          name="name"
          placeholder="Enter Name"
          value={caseData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          name="age"
          placeholder="Enter Age"
          value={caseData.age}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <input
          name="gender"
          placeholder="Enter Gender"
          value={caseData.gender}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Marital Status:</label>
        <input
          name="maritalStatus"
          placeholder="Enter Marital Status"
          value={caseData.maritalStatus}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Occupation:</label>
        <input
          name="occupation"
          placeholder="Enter Occupation"
          value={caseData.occupation}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          name="address"
          placeholder="Enter Address"
          value={caseData.address}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Phone / WhatsApp:</label>
        <input
          name="phone"
          placeholder="Enter Phone Number"
          value={caseData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Date of Visit:</label>
        <input
          name="dateOfVisit"
          type="date"
          value={caseData.dateOfVisit}
          onChange={handleInputChange}
        />
      </div>

      {/* Chief Complaints */}
      <h3>Chief Complaints</h3>
      {caseData.chiefComplaints.map((cc, index) => (
        <div key={index}>
          <input
            name="complaint"
            placeholder="Complaint"
            value={cc.complaint}
            onChange={(e) => handleChiefComplaintChange(index, e)}
          />
          <input
            name="duration"
            placeholder="Duration"
            value={cc.duration}
            onChange={(e) => handleChiefComplaintChange(index, e)}
          />
          <input
            name="description"
            placeholder="Description"
            value={cc.description}
            onChange={(e) => handleChiefComplaintChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addChiefComplaint}>+ Add Complaint</button>

      {/* Prescription */}
      <h3>Prescription</h3>
      {caseData.prescription.map((p, index) => (
        <div key={index}>
          <input
            type="date"
            name="date"
            value={p.date}
            onChange={(e) => handlePrescriptionChange(index, e)}
          />
          <input
            name="remedyName"
            placeholder="Remedy"
            value={p.remedyName}
            onChange={(e) => handlePrescriptionChange(index, e)}
          />
          <input
            name="potency"
            placeholder="Potency"
            value={p.potency}
            onChange={(e) => handlePrescriptionChange(index, e)}
          />
          <input
            name="dose"
            placeholder="Dose"
            value={p.dose}
            onChange={(e) => handlePrescriptionChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addPrescription}>+ Add Prescription</button>

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CaseSheetForm;
