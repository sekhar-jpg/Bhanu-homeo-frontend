import React, { useEffect, useState } from 'react';

const TodayFollowUps = () => {
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    // Fetch today's follow-ups from the backend
    fetch('/api/today-follow-ups')
      .then((response) => response.json())
      .then((data) => setFollowUps(data.followUps))
      .catch((error) => console.error('Error fetching follow-ups:', error));
  }, []);

  return (
    <div>
      <h3>Today's Follow-Ups</h3>
      {followUps.length > 0 ? (
        <ul>
          {followUps.map((followUp) => (
            <li key={followUp._id}>
              <strong>{followUp.caseName}</strong> - {followUp.phoneNumber}
              <br />
              <strong>Complaints:</strong> {followUp.complaints}
              <br />
              <strong>Prescription:</strong> {followUp.prescription}
              <br />
              <strong>Remarks:</strong> {followUp.remarks}
              <br />
              <strong>Date:</strong> {new Date(followUp.date).toLocaleDateString()}
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
