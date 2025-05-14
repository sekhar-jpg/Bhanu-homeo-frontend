// CaseSheetForm.jsx - React Component

import React, { useState } from 'react';
import axios from 'axios';

function CaseSheetForm() {
  const [caseData, setCaseData] = useState({
    name: '',
    age: '',
    symptoms: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCaseData({ ...caseData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/case', caseData); // Backend API call
      console.log('Case Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting case:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={caseData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={caseData.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Symptoms:</label>
        <textarea
          name="symptoms"
          value={caseData.symptoms}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CaseSheetForm;
