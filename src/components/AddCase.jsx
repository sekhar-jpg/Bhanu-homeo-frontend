import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam"; // Import the webcam component

const AddCase = () => {
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const webcamRef = React.useRef(null);

  // Capture image from the webcam
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPreview(imageSrc); // Store the captured image as preview
    setImageFile(imageSrc); // Store it for sending to the backend
  }, [webcamRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let analysisData = null;

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile); // Append the image to form data

      try {
        const response = await axios.post(
          "http://localhost:10000/analyze-image", // Update this URL to your backend endpoint
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        analysisData = response.data; // Capture the analysis result
        setAnalysisResult(analysisData);
      } catch (error) {
        console.error("Error during face analysis:", error.message);
      }
    }

    const newCase = {
      name,
      symptoms,
      createdAt: new Date().toISOString(),
      faceAnalysis: analysisData,
    };

    console.log("Case Data to Save:", newCase);

    // Save the case data to your backend or local storage
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Patient Case - Bhanu Homeopathy AI</h2>

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

      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          videoConstraints={{
            facingMode: "user",
          }}
        />
        <button type="button" onClick={capture}>Capture Image</button>
      </div>

      {preview && (
        <div>
          <h3>Captured Image:</h3>
          <img src={preview} alt="Captured Face" style={{ width: 150, height: 150 }} />
        </div>
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
