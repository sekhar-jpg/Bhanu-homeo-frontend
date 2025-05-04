// src/components/FollowUpForm.js
import React, { useState } from 'react';
import axios from 'axios';

const FollowUpForm = ({ caseId }) => {
  const [followUpText, setFollowUpText] = useState('');

  const handleFollowUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url.com/followups', {
        caseId,
        text: followUpText,
      });
      alert('Follow-up added successfully');
      setFollowUpText('');
    } catch (error) {
      console.error('Error adding follow-up:', error);
      alert('Failed to add follow-up');
    }
  };

  return (
    <form onSubmit={handleFollowUpSubmit}>
      <textarea
        value={followUpText}
        onChange={(e) => setFollowUpText(e.target.value)}
        placeholder="Enter follow-up notes"
        required
      />
      <button type="submit">Add Follow-Up</button>
    </form>
  );
};

export default FollowUpForm;
