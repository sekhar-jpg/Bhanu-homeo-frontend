// src/components/CaseView.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaseView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    axios.get(https://backend-bhanu-app.onrender.com/cases/${id}`)
      .then(res => setCaseData(res.data))
      .catch(err => console.error('Error fetching case:', err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure to delete this case?')) {
      axios.delete(https://backend-bhanu-app.onrender.com/cases/${id}`)
        .then(() => {
          alert('Case deleted');
          navigate('/');
        })
        .catch(err => alert('Error deleting case'));
    }
  };

  if (!caseData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Case Details</h2>
      <div className="bg-white rounded p-4 shadow">
        <pre>{JSON.stringify(caseData, null, 2)}</pre>
      </div>
      <div className="mt-4 flex gap-4">
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <button onClick={() => navigate(`/edit/${id}`)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
        <button onClick={() => navigate(`/followup/${id}`)} className="bg-blue-500 text-white px-4 py-2 rounded">Add Follow-Up</button>
        <button onClick={() => navigate('/')} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
      </div>
    </div>
  );
};

export default CaseView;
