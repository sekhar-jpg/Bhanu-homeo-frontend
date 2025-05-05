import React, { useEffect, useState } from 'react';
import FollowUpForm from './FollowUpForm';
import FollowUpList from './FollowUpList';

const FollowUps = () => {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    fetch('https://backend-bhanu-app.onrender.com/api/cases')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCases(data.cases);
        } else {
          alert('Failed to fetch cases');
        }
      })
      .catch((err) => {
        console.error('Error fetching cases:', err);
        alert('Error fetching cases');
      });
  }, []);

  return (
    <div>
      <h2>All Cases</h2>
      <ul>
        {cases.map((c) => (
          <li key={c._id}>
            <strong>{c.name}</strong> ({c.age}/{c.gender}) - {c.phone}
            <button onClick={() => setSelectedCase(c)}>Add/View Follow-Up</button>
          </li>
        ))}
      </ul>

      {selectedCase && (
        <div style={{ marginTop: '30px' }}>
          <h3>Selected Case: {selectedCase.name}</h3>
          <p><strong>Age:</strong> {selectedCase.age}</p>
          <p><strong>Gender:</strong> {selectedCase.gender}</p>
          <p><strong>Phone:</strong> {selectedCase.phone}</p>
          <p><strong>Complaints:</strong> {selectedCase.complaints}</p>
          <p><strong>Prescription:</strong> {selectedCase.prescription}</p>

          <hr />

          <FollowUpForm caseId={selectedCase._id} onFollowUpAdded={() => {}} />

          <hr />

          <FollowUpList caseId={selectedCase._id} />
        </div>
      )}
    </div>
  );
};

export default FollowUps;
