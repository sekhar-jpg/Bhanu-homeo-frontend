import React, { useState } from "react";

const CaseSheetForm = () => {
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
    historyPresentIllness: "",
    pastHistory: "",
    familyHistory: "",
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
    mentalSymptoms: "",
    generalRemarks: "",
    doctorObservations: "",
    prescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Case Saved");
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">New Case</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="border p-2 rounded" />
        <input name="age" placeholder="Age" onChange={handleChange} value={formData.age} className="border p-2 rounded" />
        <input name="gender" placeholder="Gender" onChange={handleChange} value={formData.gender} className="border p-2 rounded" />
        <input name="maritalStatus" placeholder="Marital Status" onChange={handleChange} value={formData.maritalStatus} className="border p-2 rounded" />
        <input name="occupation" placeholder="Occupation" onChange={handleChange} value={formData.occupation} className="border p-2 rounded" />
        <input name="address" placeholder="Address" onChange={handleChange} value={formData.address} className="border p-2 rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} className="border p-2 rounded" />
        <input name="dateOfVisit" placeholder="Date of Visit" onChange={handleChange} value={formData.dateOfVisit} className="border p-2 rounded" />
        
        <textarea name="chiefComplaints" placeholder="Chief Complaints" onChange={handleChange} value={formData.chiefComplaints} className="border p-2 rounded" />
        <textarea name="historyPresentIllness" placeholder="History of Present Illness" onChange={handleChange} value={formData.historyPresentIllness} className="border p-2 rounded" />
        <textarea name="pastHistory" placeholder="Past History" onChange={handleChange} value={formData.pastHistory} className="border p-2 rounded" />
        <textarea name="familyHistory" placeholder="Family History" onChange={handleChange} value={formData.familyHistory} className="border p-2 rounded" />
        <textarea name="appetite" placeholder="Appetite" onChange={handleChange} value={formData.appetite} className="border p-2 rounded" />
        <textarea name="cravingsAversions" placeholder="Cravings & Aversions" onChange={handleChange} value={formData.cravingsAversions} className="border p-2 rounded" />
        <textarea name="thirst" placeholder="Thirst" onChange={handleChange} value={formData.thirst} className="border p-2 rounded" />
        <textarea name="bowel" placeholder="Bowel" onChange={handleChange} value={formData.bowel} className="border p-2 rounded" />
        <textarea name="urine" placeholder="Urine" onChange={handleChange} value={formData.urine} className="border p-2 rounded" />
        <textarea name="sleep" placeholder="Sleep" onChange={handleChange} value={formData.sleep} className="border p-2 rounded" />
        <textarea name="dreams" placeholder="Dreams" onChange={handleChange} value={formData.dreams} className="border p-2 rounded" />
        <textarea name="sweat" placeholder="Sweat" onChange={handleChange} value={formData.sweat} className="border p-2 rounded" />
        <textarea name="thermal" placeholder="Thermal Nature (Hot/Cold)" onChange={handleChange} value={formData.thermal} className="border p-2 rounded" />
        <textarea name="habits" placeholder="Habits" onChange={handleChange} value={formData.habits} className="border p-2 rounded" />
        <textarea name="menstrual" placeholder="Menstrual History (if applicable)" onChange={handleChange} value={formData.menstrual} className="border p-2 rounded" />
        <textarea name="mentalSymptoms" placeholder="Mental Symptoms" onChange={handleChange} value={formData.mentalSymptoms} className="border p-2 rounded" />
        <textarea name="generalRemarks" placeholder="General Remarks" onChange={handleChange} value={formData.generalRemarks} className="border p-2 rounded" />
        <textarea name="doctorObservations" placeholder="Doctor Observations" onChange={handleChange} value={formData.doctorObservations} className="border p-2 rounded" />
        <textarea name="prescription" placeholder="Prescription" onChange={handleChange} value={formData.prescription} className="border p-2 rounded" />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CaseSheetForm;
