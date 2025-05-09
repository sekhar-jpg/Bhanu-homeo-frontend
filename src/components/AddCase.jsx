import React, { useState } from "react";
import axios from "axios";

const AddCase = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let analysisData = null;

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const response = await axios.post(
          "http://localhost:10000/analyze-image", // 🔁 Replace with Render URL if needed
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        analysisData = response.data;
        setAnalysisResult(analysisData);
      } catch (error) {
        console.error("❌ Face analysis failed:", error.message);
      }
    }

    const newCase = {
      patientName: name,
      phoneNumber: phone,
      symptoms,
      faceAnalysis: analysisData,
    };

    try {
      const saveResponse = await axios.post(
        "http://localhost:10000/api/cases", // 🔁 Replace if deployed
        newCase
      );
      alert("✅ Case saved successfully!");
      console.log(saveResponse.data);
    } catch (err) {
      console.error("❌ Error saving case:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Case</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <textarea
        placeholder="Symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        required
      />

      <label>Upload Face Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: 150, height: 150, marginTop: 10 }}
        />
      )}

      <button type="submit">Analyze and Save Case</button>

      {analysisResult && (
        <div style={{ marginTop: "15px" }}>
          <strong>Face Analysis Result:</strong>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default AddCase;
