import React, { useState } from 'react';
import axios from 'axios';

function CaseSheetForm() {
  const [caseData, setCaseData] = useState({
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    address: '',
    phone: '',
    dateOfVisit: '',
    chiefComplaints: [{ complaint: '', duration: '', description: '' }],
    presentIllness: '',
    pastHistory: { childhoodDiseases: '', surgeries: '', majorIllnesses: '' },
    familyHistory: '',
    personalHistory: {
      appetite: '',
      cravings: '',
      thirst: '',
      bowelMovement: '',
      urine: '',
      sleep: '',
      dreams: '',
      sweat: '',
      thermalNature: '',
      habits: '',
      menstrualHistory: '',
    },
    mentalSymptoms: '',
    generalRemarks: '',
    observationsByDoctor: '',
    prescription: [{ date: '', remedyName: '', potency: '', dose: '', instructions: '' }],
  });
  
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCaseData({ ...caseData, [name]: value });
  };

  const handleComplaintChange = (index, event) => {
    const { name, value } = event.target;
    const newComplaints = [...caseData.chiefComplaints];
    newComplaints[index] = { ...newComplaints[index], [name]: value };
    setCaseData({ ...caseData, chiefComplaints: newComplaints });
  };

  const handlePrescriptionChange = (index, event) => {
    const { name, value } = event.target;
    const newPrescription = [...caseData.prescription];
    newPrescription[index] = { ...newPrescription[index], [name]: value };
    setCaseData({ ...caseData, prescription: newPrescription });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', caseData.name);
    formData.append('age', caseData.age);
    formData.append('gender', caseData.gender);
    formData.append('maritalStatus', caseData.maritalStatus);
    formData.append('occupation', caseData.occupation);
    formData.append('address', caseData.address);
    formData.append('phone', caseData.phone);
    formData.append('dateOfVisit', caseData.dateOfVisit);
    formData.append('chiefComplaints', JSON.stringify(caseData.chiefComplaints));
    formData.append('presentIllness', caseData.presentIllness);
    formData.append('pastHistory', JSON.stringify(caseData.pastHistory));
    formData.append('familyHistory', caseData.familyHistory);
    formData.append('personalHistory', JSON.stringify(caseData.personalHistory));
    formData.append('mentalSymptoms', caseData.mentalSymptoms);
    formData.append('generalRemarks', caseData.generalRemarks);
    formData.append('observationsByDoctor', caseData.observationsByDoctor);
    formData.append('prescription', JSON.stringify(caseData.prescription));
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/case', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Case Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting case:', error);
    }
  };

  return (
    <div>
      <h2>New Case Sheet</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Patient Information */}
        <h3>Basic Patient Information</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={caseData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={caseData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={caseData.gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Marital Status:</label>
          <input
            type="text"
            name="maritalStatus"
            value={caseData.maritalStatus}
            onChange={handleInputChange}
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
          />
        </div>
        <div>
          <label>Phone / WhatsApp:</label>
          <input
            type="text"
            name="phone"
            value={caseData.phone}
            onChange={handleInputChange}
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

        {/* Chief Complaints */}
        <h3>Chief Complaints</h3>
        {caseData.chiefComplaints.map((complaint, index) => (
          <div key={index}>
            <div>
              <label>Complaint:</label>
              <input
                type="text"
                name="complaint"
                value={complaint.complaint}
                onChange={(e) => handleComplaintChange(index, e)}
              />
            </div>
            <div>
              <label>Duration:</label>
              <input
                type="text"
                name="duration"
                value={complaint.duration}
                onChange={(e) => handleComplaintChange(index, e)}
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={complaint.description}
                onChange={(e) => handleComplaintChange(index, e)}
              />
            </div>
          </div>
        ))}

        {/* History of Present Illness */}
        <h3>History of Present Illness</h3>
        <textarea
          name="presentIllness"
          value={caseData.presentIllness}
          onChange={handleInputChange}
        />

        {/* Past History */}
        <h3>Past History</h3>
        <div>
          <label>Childhood diseases:</label>
          <input
            type="text"
            name="childhoodDiseases"
            value={caseData.pastHistory.childhoodDiseases}
            onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, childhoodDiseases: e.target.value } })}
          />
        </div>
        <div>
          <label>Surgeries / Injuries:</label>
          <input
            type="text"
            name="surgeries"
            value={caseData.pastHistory.surgeries}
            onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, surgeries: e.target.value } })}
          />
        </div>
        <div>
          <label>Major illnesses:</label>
          <input
            type="text"
            name="majorIllnesses"
            value={caseData.pastHistory.majorIllnesses}
            onChange={(e) => setCaseData({ ...caseData, pastHistory: { ...caseData.pastHistory, majorIllnesses: e.target.value } })}
          />
        </div>

        {/* Family History */}
        <h3>Family History</h3>
        <textarea
          name="familyHistory"
          value={caseData.familyHistory}
          onChange={handleInputChange}
        />

        {/* Personal History */}
        <h3>Personal History</h3>
        <div>
          <label>Appetite:</label>
          <input
            type="text"
            name="appetite"
            value={caseData.personalHistory.appetite}
            onChange={(e) => setCaseData({ ...caseData, personalHistory: { ...caseData.personalHistory, appetite: e.target.value } })}
          />
        </div>
        <div>
          <label>Cravings / Aversions:</label>
          <input
            type="text"
            name="cravings"
            value={caseData.personalHistory.cravings}
            onChange={(e) => setCaseData({ ...caseData, personalHistory: { ...caseData.personalHistory, cravings: e.target.value } })}
          />
        </div>
        <div>
          <label>Thirst:</label>
          <input
            type="text"
            name="thirst"
            value={caseData.personalHistory.thirst}
            onChange={(e) => setCaseData({ ...caseData, personalHistory: { ...caseData.personalHistory, thirst: e.target.value } })}
          />
        </div>

        {/* Mental Symptoms */}
        <h3>Mental Symptoms</h3>
        <textarea
          name="mentalSymptoms"
          value={caseData.mentalSymptoms}
          onChange={handleInputChange}
        />

        {/* General Remarks */}
        <h3>General Remarks</h3>
        <textarea
          name="generalRemarks"
          value={caseData.generalRemarks}
          onChange={handleInputChange}
        />

        {/* Observations by Doctor */}
        <h3>Observations by Doctor</h3>
        <textarea
          name="observationsByDoctor"
          value={caseData.observationsByDoctor}
          onChange={handleInputChange}
        />

        {/* Prescription */}
        <h3>Prescription</h3>
        {caseData.prescription.map((prescription, index) => (
          <div key={index}>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={prescription.date}
                onChange={(e) => handlePrescriptionChange(index, e)}
              />
            </div>
            <div>
              <label>Remedy Name:</label>
              <input
                type="text"
                name="remedyName"
                value={prescription.remedyName}
                onChange={(e) => handlePrescriptionChange(index, e)}
              />
            </div>
            <div>
              <label>Potency:</label>
              <input
                type="text"
                name="potency"
                value={prescription.potency}
                onChange={(e) => handlePrescriptionChange(index, e)}
              />
            </div>
            <div>
              <label>Dose:</label>
              <input
                type="text"
                name="dose"
                value={prescription.dose}
                onChange={(e) => handlePrescriptionChange(index, e)}
              />
            </div
