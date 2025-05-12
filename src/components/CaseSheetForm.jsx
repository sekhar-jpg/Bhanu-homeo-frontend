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

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#333', fontFamily: 'Poppins, sans-serif' }}>Basic Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label><Input id="name" placeholder="Enter name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
          <div><label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label><Input id="age" type="number" placeholder="Enter age" value={formData.age} onChange={(e) => handleChange("age", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <Select id="gender" onValueChange={(val) => handleChange("gender", val)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>
              <SelectTrigger style={{ backgroundColor: 'white', borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}><SelectValue placeholder="Select gender" /></SelectTrigger>
              <SelectContent style={{ backgroundColor: 'white', borderColor: '#FFB6C1', borderRadius: '6px', fontFamily: 'Nunito Sans, sans-serif' }}>
                <SelectItem value="Male" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Male</SelectItem>
                <SelectItem value="Female" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Female</SelectItem>
                <SelectItem value="Other" style={{ color: '#333', fontFamily: 'Nunito Sans, sans-serif' }}>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div><label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label><Input id="maritalStatus" placeholder="Enter marital status" value={formData.maritalStatus} onChange={(e) => handleChange("maritalStatus", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
          <div><label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label><Input id="occupation" placeholder="Enter occupation" value={formData.occupation} onChange={(e) => handleChange("occupation", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
          <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label><Input id="phone" placeholder="Enter phone number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
          <div><label htmlFor="dateOfVisit" className="block text-sm font-medium text-gray-700">Date of Visit (dd/mm/yyyy)</label><Input id="dateOfVisit" placeholder="Enter date of visit" value={formData.dateOfVisit} onChange={(e) => handleChange("dateOfVisit", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#333', fontFamily: 'Poppins, sans-serif' }}>Contact Information</h3>
        <div><label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label><Textarea id="address" placeholder="Enter address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#333', fontFamily: 'Poppins, sans-serif' }}>Medical History</h3>
        <div><label htmlFor="chiefComplaints" className="block text-sm font-medium text-gray-700">Chief Complaints</label><Textarea id="chiefComplaints" placeholder="Enter chief complaints" value={formData.chiefComplaints} onChange={(e) => handleChange("chiefComplaints", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="historyPresentIllness" className="block text-sm font-medium text-gray-700">History of Present Illness</label><Textarea id="historyPresentIllness" placeholder="Enter history of present illness" value={formData.historyPresentIllness} onChange={(e) => handleChange("historyPresentIllness", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="pastHistory" className="block text-sm font-medium text-gray-700">Past History</label><Textarea id="pastHistory" placeholder="Enter past history" value={formData.pastHistory} onChange={(e) => handleChange("pastHistory", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="familyHistory" className="block text-sm font-medium text-gray-700">Family History</label><Textarea id="familyHistory" placeholder="Enter family history" value={formData.familyHistory} onChange={(e) => handleChange("familyHistory", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#333', fontFamily: 'Poppins, sans-serif' }}>General Symptoms</h3>
        <div><label htmlFor="appetite" className="block text-sm font-medium text-gray-700">Appetite</label><Textarea id="appetite" placeholder="Enter appetite details" value={formData.appetite} onChange={(e) => handleChange("appetite", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="cravingsAversions" className="block text-sm font-medium text-gray-700">Cravings & Aversions</label><Textarea id="cravingsAversions" placeholder="Enter cravings and aversions" value={formData.cravingsAversions} onChange={(e) => handleChange("cravingsAversions", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="thirst" className="block text-sm font-medium text-gray-700">Thirst</label><Textarea id="thirst" placeholder="Enter thirst details" value={formData.thirst} onChange={(e) => handleChange("thirst", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="bowel" className="block text-sm font-medium text-gray-700">Bowel Movement</label><Textarea id="bowel" placeholder="Enter bowel movement details" value={formData.bowel} onChange={(e) => handleChange("bowel", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="urine" className="block text-sm font-medium text-gray-700">Urine</label><Textarea id="urine" placeholder="Enter urine details" value={formData.urine} onChange={(e) => handleChange("urine", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="sleep" className="block text-sm font-medium text-gray-700">Sleep</label><Textarea id="sleep" placeholder="Enter sleep details" value={formData.sleep} onChange={(e) => handleChange("sleep", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="dreams" className="block text-sm font-medium text-gray-700">Dreams</label><Textarea id="dreams" placeholder="Enter dream details" value={formData.dreams} onChange={(e) => handleChange("dreams", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="sweat" className="block text-sm font-medium text-gray-700">Sweat</label><Textarea id="sweat" placeholder="Enter sweat details" value={formData.sweat} onChange={(e) => handleChange("sweat", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="thermal" className="block text-sm font-medium text-gray-700">Thermal Nature (Hot/Cold)</label><Textarea id="thermal" placeholder="Enter thermal nature" value={formData.thermal} onChange={(e) => handleChange("thermal", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="habits" className="block text-sm font-medium text-gray-700">Habits</label><Textarea id="habits" placeholder="Enter habits" value={formData.habits} onChange={(e) => handleChange("habits", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="menstrual" className="block text-sm font-medium text-gray-700">Menstrual History (if applicable)</label><Textarea id="menstrual" placeholder="Enter menstrual history" value={formData.menstrual} onChange={(e) => handleChange("menstrual", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#333', fontFamily: 'Poppins, sans-serif' }}>Mental Symptoms & Doctor's Notes</h3>
        <div><label htmlFor="mentalSymptoms" className="block text-sm font-medium text-gray-700">Mental Symptoms</label><Textarea id="mentalSymptoms" placeholder="Enter mental symptoms" value={formData.mentalSymptoms} onChange={(e) => handleChange("mentalSymptoms", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="generalRemarks" className="block text-sm font-medium text-gray-700">General Remarks</label><Textarea id="generalRemarks" placeholder="Enter general remarks" value={formData.generalRemarks} onChange={(e) => handleChange("generalRemarks", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="doctorObservations" className="block text-sm font-medium text-gray-700">Doctor Observations</label><Textarea id="doctorObservations" placeholder="Enter doctor observations" value={formData.doctorObservations} onChange={(e) => handleChange("doctorObservations", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
        <div><label htmlFor="prescription" className="block text-sm font-medium text-gray-700">Prescription</label><Textarea id="prescription" placeholder="Enter prescription" value={formData.prescription} onChange={(e) => handleChange("prescription", e.target.value)} style={{ borderColor: '#FFB6C1', borderRadius: '6px', color: '#333', fontFamily: 'Nunito Sans, sans-serif' }} /></div>
      </div>

      <div className="flex justify-center mt-6">
        <Button type="submit" className="w-1/2" style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', padding: '10px' }}>Save Case</Button>
      </div>
    </form>
  );
}
