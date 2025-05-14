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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Case Sheet</h2>

      {/* Image Upload */}
      <div>
        <label>Upload Face Image: </label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Basic Info */}
      <h3>Basic Information</h3>
      <input name="name" placeholder="Name" value={caseData.name} onChange={handleInputChange} />
      <input name="age" placeholder="Age" value={caseData.age} onChange={handleInputChange} />
      <input name="gender" placeholder="Gender" value={caseData.gender} onChange={handleInputChange} />
      <input name="maritalStatus" placeholder="Marital Status" value={caseData.maritalStatus} onChange={handleInputChange} />
      <input name="occupation" placeholder="Occupation" value={caseData.occupation} onChange={handleInputChange} />
      <input name="address" placeholder="Address" value={caseData.address} onChange={handleInputChange} />
      <input name="phone" placeholder="Phone / WhatsApp" value={caseData.phone} onChange={handleInputChange} />
      <input name="dateOfVisit" type="date" value={caseData.dateOfVisit} onChange={handleInputChange} />

      {/* Chief Complaints */}
      <h3>Chief Complaints</h3>
      {caseData.chiefComplaints.map((cc, index) => (
        <div key={index}>
          <input name="complaint" placeholder="Complaint" value={cc.complaint} onChange={(e) => handleChiefComplaintChange(index, e)} />
          <input name="duration" placeholder="Duration" value={cc.duration} onChange={(e) => handleChiefComplaintChange(index, e)} />
          <input name="description" placeholder="Description" value={cc.description} onChange={(e) => handleChiefComplaintChange(index, e)} />
        </div>
      ))}
      <button onClick={addChiefComplaint}>+ Add Complaint</button>

      <h3>History of Present Illness</h3>
      <textarea name="presentIllness" value={caseData.presentIllness} onChange={handleInputChange} />

      <h3>Past History</h3>
      <input name="childhoodDiseases" placeholder="Childhood diseases" value={caseData.pastHistory.childhoodDiseases} onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, childhoodDiseases: e.target.value } })} />
      <input name="surgeriesInjuries" placeholder="Surgeries / Injuries" value={caseData.pastHistory.surgeriesInjuries} onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, surgeriesInjuries: e.target.value } })} />
      <input name="majorIllnesses" placeholder="Major illnesses" value={caseData.pastHistory.majorIllnesses} onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, majorIllnesses: e.target.value } })} />

      <h3>Family History</h3>
      <textarea name="familyHistory" value={caseData.familyHistory} onChange={handleInputChange} />

      <h3>Personal History</h3>
      {Object.keys(caseData.personalHistory).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={caseData.personalHistory[key]}
          onChange={(e) =>
            setCaseData({
              ...caseData,
              personalHistory: {
                ...caseData.personalHistory,
                [key]: e.target.value,
              },
            })
          }
        />
      ))}

      <h3>Mental Symptoms</h3>
      <textarea name="mentalSymptoms" value={caseData.mentalSymptoms} onChange={handleInputChange} />

      <h3>General Remarks</h3>
      <textarea name="generalRemarks" value={caseData.generalRemarks} onChange={handleInputChange} />

      <h3>Observations by Doctor</h3>
      <textarea name="observationsByDoctor" value={caseData.observationsByDoctor} onChange={handleInputChange} />

      <h3>Prescription</h3>
      {caseData.prescription.map((p, index) => (
        <div key={index}>
          <input type="date" name="date" value={p.date} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="remedyName" placeholder="Remedy" value={p.remedyName} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="potency" placeholder="Potency" value={p.potency} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="dose" placeholder="Dose" value={p.dose} onChange={(e) => handlePrescriptionChange(index, e)} />
        </div>
      ))}
      <button onClick={addPrescription}>+ Add Prescription</button>
    </div>
  );
};

export default CaseSheetForm;
