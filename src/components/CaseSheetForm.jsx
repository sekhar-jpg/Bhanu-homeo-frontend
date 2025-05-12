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
