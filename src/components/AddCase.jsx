import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import Webcam from "react-webcam";

const AddCase = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    address: "",
    phone: "",
    dateOfVisit: "",
    chiefComplaints: "",
    historyPresent: "",
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
    menses: "",
    mentalSymptoms: "",
    generalRemarks: "",
    doctorObservations: "",
    prescription: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const webcamRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const file = dataURLtoFile(imageSrc, 'face.jpg');
  setImageFile(file);
  }, [webcamRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let analysisData = null;

    if (imageFile) {
      const formData = new FormData();
      const blob = await fetch(imageFile).then(res => res.blob());
      formData.append("image", blob, "face.jpg");

      try {
        const response = await axios.post(
          "http://localhost:10000/analyze-image", // Update with backend URL
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        analysisData = response.data;
        setAnalysisResult(analysisData);
      } catch (err) {
        console.error("Face analysis failed:", err.message);
      }
    }

    const caseData = {
      ...form,
      createdAt: new Date().toISOString(),
      faceAnalysis: analysisData,
    };

    console.log("Final Case Submission:", caseData);

    // Save the caseData to backend or database here
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Submit Patient Case - Bhanu Homeopathy AI</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" />
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
        <option value="">Marital Status</option>
        <option>Single</option>
        <option>Married</option>
      </select>
      <input name="occupation" value={form.occupation} onChange={handleChange} placeholder="Occupation" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <input name="dateOfVisit" value={form.dateOfVisit} onChange={handleChange} placeholder="Date of Visit (dd/mm/yyyy)" />

      <textarea name="chiefComplaints" value={form.chiefComplaints} onChange={handleChange} placeholder="Chief Complaints" />
      <textarea name="historyPresent" value={form.historyPresent} onChange={handleChange} placeholder="History of Present Illness" />
      <textarea name="pastHistory" value={form.pastHistory} onChange={handleChange} placeholder="Past History" />
      <textarea name="familyHistory" value={form.familyHistory} onChange={handleChange} placeholder="Family History" />
      <textarea name="appetite" value={form.appetite} onChange={handleChange} placeholder="Appetite" />
      <textarea name="cravingsAversions" value={form.cravingsAversions} onChange={handleChange} placeholder="Cravings & Aversions" />
      <textarea name="thirst" value={form.thirst} onChange={handleChange} placeholder="Thirst" />
      <textarea name="bowel" value={form.bowel} onChange={handleChange} placeholder="Bowel Movement" />
      <textarea name="urine" value={form.urine} onChange={handleChange} placeholder="Urine" />
      <textarea name="sleep" value={form.sleep} onChange={handleChange} placeholder="Sleep" />
      <textarea name="dreams" value={form.dreams} onChange={handleChange} placeholder="Dreams" />
      <textarea name="sweat" value={form.sweat} onChange={handleChange} placeholder="Sweat" />
      <textarea name="thermal" value={form.thermal} onChange={handleChange} placeholder="Thermal Nature (Hot/Cold)" />
      <textarea name="habits" value={form.habits} onChange={handleChange} placeholder="Habits" />
      <textarea name="menses" value={form.menses} onChange={handleChange} placeholder="Menstrual History (if applicable)" />
      <textarea name="mentalSymptoms" value={form.mentalSymptoms} onChange={handleChange} placeholder="Mental Symptoms" />
      <textarea name="generalRemarks" value={form.generalRemarks} onChange={handleChange} placeholder="General Remarks" />
      <textarea name="doctorObservations" value={form.doctorObservations} onChange={handleChange} placeholder="Doctor Observations" />

      <h3>Capture Patient Face</h3>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{ facingMode: "user" }}
      />
      <button type="button" onClick={capture}>Capture Image</button>

      {preview && (
        <div>
          <h4>Captured Image:</h4>
          <img src={preview} alt="Face" style={{ width: 150, height: 150 }} />
        </div>
      )}

      <textarea name="prescription" value={form.prescription} onChange={handleChange} placeholder="Prescription" />

      <button type="submit">Submit Case</button>

      {analysisResult && (
        <div style={{ marginTop: "10px" }}>
          <strong>Face Analysis Result:</strong>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default AddCase;
