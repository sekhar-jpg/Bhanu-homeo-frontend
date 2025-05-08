import React, { useEffect, useState } from 'react';

const TodayFollowUps = () => {
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://backend-bhanu-app.onrender.com/api/cases/followups/today')
      .then((response) => response.json())
      .then((data) => {
        setFollowUps(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching follow-ups:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Today's Follow-Ups</h3>
      {loading ? (
        <p>Loading follow-ups...</p>
      ) : followUps.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {followUps.map((followUp) => (
            <li
              key={followUp._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: '15px',
                padding: '10px',
              }}
            >
              <strong>Name:</strong> {followUp.caseName || 'N/A'} <br />
              <strong>Phone:</strong> {followUp.phoneNumber || 'N/A'} <br />
              <strong>Complaints:</strong> {followUp.complaints || 'N/A'} <br />
              <strong>Prescription:</strong> {followUp.prescription || 'N/A'} <br />
              <strong>Remarks:</strong> {followUp.remarks || 'N/A'} <br />
              <strong>Date:</strong>{' '}
              {followUp.date
                ? new Date(followUp.date).toLocaleDateString()
                : 'N/A'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No follow-ups for today!</p>
      )}
    </div>
  );
};

export default TodayFollowUps;
