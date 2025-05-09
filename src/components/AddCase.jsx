import React, { useState } from "react";
import axios from "axios";

const AddCase = () => {
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null); // Optional: store face detection result

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Upload image to backend and get face analysis
    let analysisData = null;

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const response = await axios.post(
          "http://localhost:10000/analyze-image", // Update if deployed
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        analysisData = response.data;
        setAnalysisResult(analysisData); // Optional: display result
      } catch (error) {
        console.error("Face analysis failed:", error.message);
      }
    }

    // Step 2: Prepare case object
    const newCase = {
      name,
      symptoms,
      createdAt: new Date().toISOString(),
      faceAnalysis: analysisData, // Optional: include AI result
    };

    console.log("✅ Final Case Data to Save:", newCase);

    // TODO: Save newCase to your backend or local storage
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

      {/* Optional: Show face analysis result */}
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
