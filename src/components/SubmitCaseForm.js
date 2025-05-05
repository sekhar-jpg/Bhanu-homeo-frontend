import React, { useState } from 'react';

const SubmitCaseForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [occupation, setOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfVisit, setDateOfVisit] = useState('');
  const [chiefComplaints, setChiefComplaints] = useState('');
  const [historyOfPresentIllness, setHistoryOfPresentIllness] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const caseData = {
      name,
      age,
      gender,
      maritalStatus,
      occupation,
      address,
      phone,
      dateOfVisit,
      chiefComplaints,
      historyOfPresentIllness,
      prescription,
    };

    try {
      const response = await fetch('https://backend-bhanu-app.onrender.com/api/cases/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(caseData),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        alert('✅ Case submitted successfully!');
      } else {
        alert(`❌ Error: ${data?.message || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ Network error. Try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Patient Case</h3>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

      <label>Gender:</label>
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />

      <label>Marital Status:</label>
      <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required />

      <label>Occupation:</label>
      <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} required />

      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

      <label>Phone:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label>Date of Visit:</label>
      <input type="date" value={dateOfVisit} onChange={(e) => setDateOfVisit(e.target.value)} required />

      <label>Chief Complaints:</label>
      <textarea value={chiefComplaints} onChange={(e) => setChiefComplaints(e.target.value)} required />

      <label>History of Present Illness:</label>
      <textarea value={historyOfPresentIllness} onChange={(e) => setHistoryOfPresentIllness(e.target.value)} required />

      <label>Prescription:</label>
      <textarea value={prescription} onChange={(e) => setPrescription(e.target.value)} required />

      <button type="submit">Submit Case</button>
    </form>
  );
};

export default SubmitCaseForm;
