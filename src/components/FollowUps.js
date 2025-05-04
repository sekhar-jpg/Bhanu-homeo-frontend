import React, { useState } from 'react';

const FollowUpForm = ({ caseId, onFollowUpAdded }) => {
  const [followUpDate, setFollowUpDate] = useState('');
  const [complaints, setComplaints] = useState('');
  const [prescription, setPrescription] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const followUpData = {
      caseId,
      date: followUpDate,
      complaints,
      prescription,
      remarks,
    };

    // Call the backend API to save the follow-up data
    fetch('/api/add-follow-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(followUpData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          onFollowUpAdded(data.followUp); // To update the parent component with the new follow-up
          alert('Follow-up added successfully!');
        } else {
          alert('Failed to add follow-up!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error adding follow-up!');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Follow-Up</h3>
      <label>
        Date:
        <input
          type="date"
          value={followUpDate}
          onChange={(e) => setFollowUpDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Complaints:
        <textarea
          value={complaints}
          onChange={(e) => setComplaints(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Prescription:
        <textarea
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Remarks:
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Follow-Up</button>
    </form>
  );
};

export default FollowUpForm;
