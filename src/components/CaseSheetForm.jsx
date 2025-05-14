import React, { useState } from 'react';

const CaseSheetForm = () => {
  const [caseData, setCaseData] = useState({
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    address: '',
    phone: '',
    dateOfVisit: '',
    complaints: [{ complaint: '', duration: '', description: '' }],
    historyPresentIllness: '',
    pastHistory: {
      childhoodDiseases: '',
      surgeries: '',
      illnesses: ''
    },
    familyHistory: '',
    personalHistory: {
      appetite: '',
      cravings: '',
      thirst: '',
      bowel: '',
      urine: '',
      sleep: '',
      dreams: '',
      sweat: '',
      thermal: '',
      habits: '',
      menstrual: ''
    },
    mentalSymptoms: '',
    generalRemarks: '',
    observationsByDoctor: '',
    prescription: [{ date: '', remedyName: '', potency: '', dose: '', instructions: '' }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseData({ ...caseData, [name]: value });
  };

  const handleNestedChange = (section, key, value) => {
    setCaseData({
      ...caseData,
      [section]: {
        ...caseData[section],
        [key]: value
      }
    });
  };

  const handleComplaintChange = (index, e) => {
    const updated = [...caseData.complaints];
    updated[index][e.target.name] = e.target.value;
    setCaseData({ ...caseData, complaints: updated });
  };

  const addComplaint = () => {
    setCaseData({
      ...caseData,
      complaints: [...caseData.complaints, { complaint: '', duration: '', description: '' }]
    });
  };

  const handlePrescriptionChange = (index, e) => {
    const updated = [...caseData.prescription];
    updated[index][e.target.name] = e.target.value;
    setCaseData({ ...caseData, prescription: updated });
  };

  const addPrescription = () => {
    setCaseData({
      ...caseData,
      prescription: [...caseData.prescription, { date: '', remedyName: '', potency: '', dose: '', instructions: '' }]
    });
  };

  const removePrescription = (index) => {
    const updated = [...caseData.prescription];
    updated.splice(index, 1);
    setCaseData({ ...caseData, prescription: updated });
  };

  return (
    <form>
      <h2>Basic Patient Information</h2>
      <input name="name" placeholder="Name" value={caseData.name} onChange={handleInputChange} />
      <input name="age" placeholder="Age" value={caseData.age} onChange={handleInputChange} />
      <input name="gender" placeholder="Gender" value={caseData.gender} onChange={handleInputChange} />
      <input name="maritalStatus" placeholder="Marital Status" value={caseData.maritalStatus} onChange={handleInputChange} />
      <input name="occupation" placeholder="Occupation" value={caseData.occupation} onChange={handleInputChange} />
      <input name="address" placeholder="Address" value={caseData.address} onChange={handleInputChange} />
      <input name="phone" placeholder="Phone / WhatsApp" value={caseData.phone} onChange={handleInputChange} />
      <input type="date" name="dateOfVisit" value={caseData.dateOfVisit} onChange={handleInputChange} />

      <h2>Chief Complaints</h2>
      {caseData.complaints.map((comp, index) => (
        <div key={index}>
          <input name="complaint" placeholder="Complaint" value={comp.complaint} onChange={(e) => handleComplaintChange(index, e)} />
          <input name="duration" placeholder="Duration" value={comp.duration} onChange={(e) => handleComplaintChange(index, e)} />
          <input name="description" placeholder="Description" value={comp.description} onChange={(e) => handleComplaintChange(index, e)} />
        </div>
      ))}
      <button type="button" onClick={addComplaint}>+ Add Complaint</button>

      <h2>History of Present Illness</h2>
      <textarea name="historyPresentIllness" value={caseData.historyPresentIllness} onChange={handleInputChange} />

      <h2>Past History</h2>
      <textarea placeholder="Childhood diseases" value={caseData.pastHistory.childhoodDiseases} onChange={(e) => handleNestedChange('pastHistory', 'childhoodDiseases', e.target.value)} />
      <textarea placeholder="Surgeries / Injuries" value={caseData.pastHistory.surgeries} onChange={(e) => handleNestedChange('pastHistory', 'surgeries', e.target.value)} />
      <textarea placeholder="Major illnesses" value={caseData.pastHistory.illnesses} onChange={(e) => handleNestedChange('pastHistory', 'illnesses', e.target.value)} />

      <h2>Family History</h2>
      <textarea name="familyHistory" value={caseData.familyHistory} onChange={handleInputChange} />

      <h2>Personal History</h2>
      {Object.keys(caseData.personalHistory).map((key) => (
        <input
          key={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={caseData.personalHistory[key]}
          onChange={(e) => handleNestedChange('personalHistory', key, e.target.value)}
        />
      ))}

      <h2>Mental Symptoms</h2>
      <textarea name="mentalSymptoms" value={caseData.mentalSymptoms} onChange={handleInputChange} />

      <h2>General Remarks</h2>
      <textarea name="generalRemarks" value={caseData.generalRemarks} onChange={handleInputChange} />

      <h2>Observations by Doctor</h2>
      <textarea name="observationsByDoctor" value={caseData.observationsByDoctor} onChange={handleInputChange} />

      <h2>Prescription</h2>
      {caseData.prescription.map((pres, index) => (
        <div key={index}>
          <input name="date" type="date" value={pres.date} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="remedyName" placeholder="Remedy Name" value={pres.remedyName} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="potency" placeholder="Potency" value={pres.potency} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="dose" placeholder="Dose" value={pres.dose} onChange={(e) => handlePrescriptionChange(index, e)} />
          <input name="instructions" placeholder="Instructions" value={pres.instructions} onChange={(e) => handlePrescriptionChange(index, e)} />
          <button type="button" onClick={() => removePrescription(index)}>-</button>
        </div>
      ))}
      <button type="button" onClick={addPrescription}>+ Add Prescription</button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CaseSheetForm;
