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
    prescription: [{ date: "", remedyName: "", potency: "", dose: "", instructions: "" }],
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
      prescription: [...caseData.prescription, { date: "", remedyName: "", potency: "", dose: "", instructions: "" }],
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
      <h3>1. Basic Patient Information</h3>
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
        <label>Age / Gender:</label>
        <input
          name="age"
          placeholder="Enter Age"
          value={caseData.age}
          onChange={handleInputChange}
        />
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
      <h3>2. Chief Complaints</h3>
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

      {/* History of Present Illness */}
      <h3>3. History of Present Illness</h3>
      <div>
        <textarea
          name="historyPresentIllness"
          placeholder="Detailed development of complaints"
          value={caseData.historyPresentIllness}
          onChange={handleInputChange}
        />
      </div>

      {/* Past History */}
      <h3>4. Past History</h3>
      <div>
        <label>Childhood Diseases:</label>
        <input
          name="childhoodDiseases"
          placeholder="Enter Childhood Diseases"
          value={caseData.pastHistory.childhoodDiseases}
          onChange={(e) =>
            setCaseData({
              ...caseData,
              pastHistory: { ...caseData.pastHistory, childhoodDiseases: e.target.value },
            })
          }
        />
      </div>

      <div>
        <label>Surgeries / Injuries:</label>
        <input
          name="surgeriesInjuries"
          placeholder="Enter Surgeries / Injuries"
          value={caseData.pastHistory.surgeriesInjuries}
          onChange={(e) =>
            setCaseData({
              ...caseData,
              pastHistory: { ...caseData.pastHistory, surgeriesInjuries: e.target.value },
            })
          }
        />
      </div>

      <div>
        <label>Major Illnesses:</label>
        <input
          name="majorIllnesses"
          placeholder="Enter Major Illnesses"
          value={caseData.pastHistory.majorIllnesses}
          onChange={(e) =>
            setCaseData({
              ...caseData,
              pastHistory: { ...caseData.pastHistory, majorIllnesses: e.target.value },
            })
          }
        />
      </div>

      {/* Family History */}
      <h3>5. Family History</h3>
      <div>
        <textarea
          name="familyHistory"
          placeholder="Any history of: Diabetes, Hypertension, Cancer, Skin Disease, etc."
          value={caseData.familyHistory}
          onChange={handleInputChange}
        />
      </div>

      {/* Personal History */}
      <h3>6. Personal History</h3>
      {Object.keys(caseData.personalHistory).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            name={key}
            placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            value={caseData.personalHistory[key]}
            onChange={(e) =>
              setCaseData({
                ...caseData,
                personalHistory: { ...caseData.personalHistory, [key]: e.target.value },
              })
            }
          />
        </div>
      ))}

      {/* Mental Symptoms */}
      <h3>7. Mental Symptoms</h3>
      <div>
        <textarea
          name="mentalSymptoms"
          placeholder="e.g., Fear, Anxiety, Sadness, Anger, Jealousy, Lack of Confidence, etc."
          value={caseData.mentalSymptoms}
          onChange={handleInputChange}
        />
      </div>

      {/* General Remarks */}
      <h3>8. General Remarks</h3>
      <div>
        <textarea
          name="generalRemarks"
          placeholder="Energy level, daily routine, stress, etc."
          value={caseData.generalRemarks}
          onChange={handleInputChange}
        />
      </div>

      {/* Observations by Doctor */}
      <h3>9. Observations by Doctor</h3>
      <div>
        <textarea
          name="observationsByDoctor"
          placeholder="e.g., Face color, expressions, posture, behavior in clinic, etc."
          value={caseData.observationsByDoctor}
          onChange={handleInputChange}
        />
      </div>

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
          <input
            name="instructions"
            placeholder="
