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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-6 shadow rounded-xl"
      style={{
        backgroundColor: '#F8F8F8', // Light gray background
        borderRadius: '12px',
        fontFamily: 'Segoe UI, sans-serif', // Modern font
        color: '#333333', // Dark gray text
      }}
    >
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ color: '#1E90FF', fontFamily: 'Segoe UI, sans-serif' }} // Blue heading
      >
        Case Sheet
      </h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif' }}>
          Basic Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Name
            </label>
            <Input
              id="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Age
            </label>
            <Input
              id="age"
              type="number"
              placeholder="Enter age"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Gender
            </label>
            <Select
              id="gender"
              onValueChange={(val) => handleChange("gender", val)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            >
              <SelectTrigger style={{ backgroundColor: 'white', borderColor: '#CCCCCC', borderRadius: '6px', color: '#333333', fontFamily: 'Segoe UI, sans-serif', fontSize: '16px', padding: '8px' }}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent style={{ backgroundColor: 'white', borderColor: '#CCCCCC', borderRadius: '6px', fontFamily: 'Segoe UI, sans-serif', fontSize: '16px' }}>
                <SelectItem value="Male" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif', fontSize: '16px', padding: '8px' }}>
                  Male
                </SelectItem>
                <SelectItem value="Female" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif', fontSize: '16px', padding: '8px' }}>
                  Female
                </SelectItem>
                <SelectItem value="Other" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif', fontSize: '16px', padding: '8px' }}>
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Marital Status
            </label>
            <Input
              id="maritalStatus"
              placeholder="Enter marital status"
              value={formData.maritalStatus}
              onChange={(e) => handleChange("maritalStatus", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Occupation
            </label>
            <Input
              id="occupation"
              placeholder="Enter occupation"
              value={formData.occupation}
              onChange={(e) => handleChange("occupation", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Phone
            </label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfVisit" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
              Date of Visit (dd/mm/yyyy)
            </label>
            <Input
              id="dateOfVisit"
              placeholder="Enter date of visit"
              value={formData.dateOfVisit}
              onChange={(e) => handleChange("dateOfVisit", e.target.value)}
              style={{
                borderColor: '#CCCCCC',
                borderRadius: '6px',
                color: '#333333',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '16px',
                padding: '8px',
              }}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif' }}>
          Contact Information
        </h3>
        <div className="mb-3">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Address
          </label>
          <Textarea
            id="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif' }}>
          Medical History
        </h3>
        <div className="mb-3">
          <label htmlFor="chiefComplaints" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Chief Complaints
          </label>
          <Textarea
            id="chiefComplaints"
            placeholder="Enter chief complaints"
            value={formData.chiefComplaints}
            onChange={(e) => handleChange("chiefComplaints", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="historyPresentIllness" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            History of Present Illness
          </label>
          <Textarea
            id="historyPresentIllness"
            placeholder="Enter history of present illness"
            value={formData.historyPresentIllness}
            onChange={(e) => handleChange("historyPresentIllness", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pastHistory" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Past History
          </label>
          <Textarea
            id="pastHistory"
            placeholder="Enter past history"
            value={formData.pastHistory}
            onChange={(e) => handleChange("pastHistory", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="familyHistory" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Family History
          </label>
          <Textarea
            id="familyHistory"
            placeholder="Enter family history"
            value={formData.familyHistory}
            onChange={(e) => handleChange("familyHistory", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: '#333333', fontFamily: 'Segoe UI, sans-serif' }}>
          General Symptoms
        </h3>
        <div className="mb-3">
          <label htmlFor="appetite" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Appetite
          </label>
          <Textarea
            id="appetite"
            placeholder="Enter appetite details"
            value={formData.appetite}
            onChange={(e) => handleChange("appetite", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cravingsAversions" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Cravings & Aversions
          </label>
          <Textarea
            id="cravingsAversions"
            placeholder="Enter cravings and aversions"
            value={formData.cravingsAversions}
            onChange={(e) => handleChange("cravingsAversions", e.target.value)}
            style={{
              borderColor: '#CCCCCC',
              borderRadius: '6px',
              color: '#333333',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '16px',
              padding: '8px',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thirst" className="block text-sm font-medium text-gray-700" style={{ fontSize: '16px', color: '#555555' }}>
            Thirst
          </label>
          <Textarea
            id="thirst"
            placeholder="Enter thirst details"
            value={formData.thirst}
            onChange={(e) => handleChange("thirst", e.target.value)}
            style={{
              borderColor
