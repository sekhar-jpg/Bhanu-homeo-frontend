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

  const renderInput = (label, name, type = "text") => (
    <div className="flex items-start gap-4">
      <label htmlFor={name} className="w-48 text-right pt-2 font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={`Enter ${label}`}
        className="flex-1 border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );

  const renderTextarea = (label, name) => (
    <div className="flex items-start gap-4">
      <label htmlFor={name} className="w-48 text-right pt-2 font-medium">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={`Enter ${label}`}
        className="flex-1 border border-gray-300 rounded px-3 py-2"
        rows={3}
      />
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">New Case</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {renderInput("Name", "name")}
        {renderInput("Age", "age")}
        {renderInput("Gender", "gender")}
        {renderInput("Marital Status", "maritalStatus")}
        {renderInput("Occupation", "occupation")}
        {renderInput("Address", "address")}
        {renderInput("Phone", "phone")}
        {renderInput("Date of Visit", "dateOfVisit", "date")}

        {renderTextarea("Chief Complaints", "chiefComplaints")}
        {renderTextarea("History of Present Illness", "historyPresentIllness")}
        {renderTextarea("Past History", "pastHistory")}
        {renderTextarea("Family History", "familyHistory")}
        {renderTextarea("Appetite", "appetite")}
        {renderTextarea("Cravings & Aversions", "cravingsAversions")}
        {renderTextarea("Thirst", "thirst")}
        {renderTextarea("Bowel", "bowel")}
        {renderTextarea("Urine", "urine")}
        {renderTextarea("Sleep", "sleep")}
        {renderTextarea("Dreams", "dreams")}
        {renderTextarea("Sweat", "sweat")}
        {renderTextarea("Thermal Nature (Hot/Cold)", "thermal")}
        {renderTextarea("Habits", "habits")}
        {renderTextarea("Menstrual History (if applicable)", "menstrual")}
        {renderTextarea("Mental Symptoms", "mentalSymptoms")}
        {renderTextarea("General Remarks", "generalRemarks")}
        {renderTextarea("Doctor Observations", "doctorObservations")}
        {renderTextarea("Prescription", "prescription")}

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaseSheetForm;
