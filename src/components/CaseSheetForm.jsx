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
    historyPresentIllness: "",
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
      
      {/* Other fields like Age, Gender, etc. */}

      {/* Chief Complaints */}
      <h3>Chief Complaints</h3>
      {caseData.chiefComplaints.map((cc, index) => (
        <div key={index}>
          <div>
            <label>Complaint:</label>
            <input
              name="complaint"
              placeholder="Enter Complaint"
              value={cc.complaint}
              onChange={(e) => handleChiefComplaintChange(index, e)}
            />
          </div>
          <div>
            <label>Duration:</label>
            <input
              name="duration"
              placeholder="Enter Duration"
              value={cc.duration}
              onChange={(e) => handleChiefComplaintChange(index, e)}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              name="description"
              placeholder="Enter Description"
              value={cc.description}
              onChange={(e) => handleChiefComplaintChange(index, e)}
            />
          </div>
        </div>
      ))}
      <button onClick={addChiefComplaint}>+ Add Complaint</button>

      {/* History of Present Illness */}
      <h3>History of Present Illness</h3>
      <div>
        <textarea
          name="historyPresentIllness"
          placeholder="Detailed development of complaints"
          value={caseData.historyPresentIllness}
          onChange={handleInputChange}
        />
      </div>

      {/* Past History */}
      <h3>Past History</h3>
      {/* Add fields like Childhood Diseases, Surgeries/Injuries, Major Illnesses */}

      {/* Family History */}
      <h3>Family History</h3>
      {/* Family history input */}

      {/* Personal History */}
      <h3>Personal History</h3>
      {/* Personal history input */}

      {/* Mental Symptoms */}
      <h3>Mental Symptoms</h3>
      {/* Mental symptoms input */}

      {/* General Remarks */}
      <h3>General Remarks</h3>
      {/* General remarks input */}

      {/* Observations by Doctor */}
      <h3>Observations by Doctor</h3>
      {/* Doctor observations input */}

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
      <div>
        <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CaseSheetForm;
