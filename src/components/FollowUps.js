// src/components/FollowUpForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FollowUpForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const followUpData = { caseId: id, note, date };
    axios.post('https://your-backend-url/followups', followUpData)
      .then(() => {
        alert('Follow-up added');
        navigate(`/case/${id}`);
      })
      .catch(err => alert('Error adding follow-up'));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Follow-Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Note</label>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FollowUpForm;
