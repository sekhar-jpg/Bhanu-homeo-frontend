// src/components/SubmitCaseForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitCaseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    symptoms: '',
    date: ''
  });

  useEffect(() => {
    axios.get(`https://your-backend-url/cases/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error('Error fetching case:', err));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`https://your-backend-url/cases/${id}`, formData)
      .then(() => {
        alert('Case updated successfully');
        navigate(`/case/${id}`);
      })
      .catch(err => alert('Update failed'));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit Case</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'age', 'gender', 'phone', 'symptoms', 'date'].map(field => (
          <div key={field}>
            <label className="block capitalize">{field}</label>
            <input
              name={field}
              value={formData[field] || ''}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default SubmitCaseForm;
