import React, { useState } from "react";

const AddCase = () => {
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let base64Image = "";
    if (imageFile) {
      base64Image = await convertToBase64(imageFile);
    }

    const newCase = {
      name,
      symptoms,
      faceImage: base64Image,
      createdAt: new Date().toISOString(),
    };

    console.log("Case Data to Save:", newCase);
    // Next step: Save to IndexedDB or API
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
      <button type="submit">Save Case</button>
    </form>
  );
};

export default AddCase;
