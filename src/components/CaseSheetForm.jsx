import React, { useState } from 'react';
import axios from 'axios';

function CaseSheetForm() {
  const [caseData, setCaseData] = useState({
    name: '',
    age: '',
    symptoms: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCaseData({ ...caseData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', caseData.name);
    formData.append('age', caseData.age);
    formData.append('symptoms', caseData.symptoms);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/case', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Case Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting case:', error);
    }
  };

  return (
    <div>
      <h2>New Case Sheet</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={caseData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Age Field */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={caseData.age}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Symptoms Field */}
        <div>
          <label>Symptoms:</label>
          <textarea
            name="symptoms"
            value={caseData.symptoms}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label>Upload Face Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div>
            <h4>Image Preview:</h4>
            <img src={imagePreview} alt="Image Preview" width="100" />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CaseSheetForm;
