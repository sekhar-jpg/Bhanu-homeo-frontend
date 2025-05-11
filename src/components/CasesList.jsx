// src/components/CasesList.jsx
import React, { useState, useEffect } from 'react';

// Dummy data for the list of cases (you can replace this with real data later)
const dummyCases = [
  { id: 1, name: 'Case 1', date: '2025-05-01', complaint: 'Headache' },
  { id: 2, name: 'Case 2', date: '2025-05-02', complaint: 'Stomach ache' },
  { id: 3, name: 'Case 3', date: '2025-05-03', complaint: 'Cough' },
];

const CasesList = () => {
  const [cases, setCases] = useState([]);

  // Fetch cases data (using dummy data for now)
  useEffect(() => {
    setCases(dummyCases);  // Replace with an API call later
  }, []);

  return (
    <div>
      <h2>List of Cases</h2>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            <strong>{caseItem.name}</strong><br />
            Date: {caseItem.date}<br />
            Complaint: {caseItem.complaint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesList;
