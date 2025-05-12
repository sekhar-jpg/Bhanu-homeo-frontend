import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function CaseSheetForm() {
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
    prescription: ""
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Case Data:", formData);
    alert("Case saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 shadow rounded-xl" style={{ backgroundColor: '#FFFDD0', borderRadius: '12px' }}>
      <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#FF69B4', fontFamily: 'Poppins, sans-serif' }}>Case Sheet</h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
        <Input type="number" placeholder="Age" value={formData.age} onChange={(e) => handleChange("age", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />

        <Select onValueChange={(val) => handleChange("gender", val)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>
          <SelectTrigger style={{ backgroundColor: 'white', borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}><SelectValue placeholder="Gender" /></SelectTrigger>
          <SelectContent style={{ backgroundColor: 'white', borderColor: '#FFB6C1', borderRadius: '6px', fontFamily: 'Nunito Sans, sans-serif' }}>
            <SelectItem value="Male" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Male</SelectItem>
            <SelectItem value="Female" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Female</SelectItem>
            <SelectItem value="Other" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Other</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Marital Status" value={formData.maritalStatus} onChange={(e) => handleChange("maritalStatus", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
        <Input placeholder="Occupation" value={formData.occupation} onChange={(e) => handleChange("occupation", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
        <Input placeholder="Phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
        <Input placeholder="Date of Visit (dd/mm/yyyy)" value={formData.dateOfVisit} onChange={(e) => handleChange("dateOfVisit", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      </div>

      <Textarea placeholder="Address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />

      {/* Medical Info */}
      <Textarea placeholder="Chief Complaints" value={formData.chiefComplaints} onChange={(e) => handleChange("chiefComplaints", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="History of Present Illness" value={formData.historyPresentIllness} onChange={(e) => handleChange("historyPresentIllness", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Past History" value={formData.pastHistory} onChange={(e) => handleChange("pastHistory", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Family History" value={formData.familyHistory} onChange={(e) => handleChange("familyHistory", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />

      {/* General Symptoms */}
      <Textarea placeholder="Appetite" value={formData.appetite} onChange={(e) => handleChange("appetite", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Cravings & Aversions" value={formData.cravingsAversions} onChange={(e) => handleChange("cravingsAversions", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Thirst" value={formData.thirst} onChange={(e) => handleChange("thirst", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Bowel Movement" value={formData.bowel} onChange={(e) => handleChange("bowel", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Urine" value={formData.urine} onChange={(e) => handleChange("urine", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Sleep" value={formData.sleep} onChange={(e) => handleChange("sleep", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Dreams" value={formData.dreams} onChange={(e) => handleChange("dreams", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Sweat" value={formData.sweat} onChange={(e) => handleChange("sweat", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Thermal Nature (Hot/Cold)" value={formData.thermal} onChange={(e) => handleChange("thermal", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Habits" value={formData.habits} onChange={(e) => handleChange("habits", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Menstrual History (if applicable)" value={formData.menstrual} onChange={(e) => handleChange("menstrual", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />

      {/* Mental + Doctor Section */}
      <Textarea placeholder="Mental Symptoms" value={formData.mentalSymptoms} onChange={(e) => handleChange("mentalSymptoms", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="General Remarks" value={formData.generalRemarks} onChange={(e) => handleChange("generalRemarks", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Doctor Observations" value={formData.doctorObservations} onChange={(e) => handleChange("doctorObservations", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />
      <Textarea placeholder="Prescription" value={formData.prescription} onChange={(e) => handleChange("prescription", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} />

      <Button type="submit" className="w-full" style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', padding: '10px' }}>Save Case</Button>
    </form>
  );
}
