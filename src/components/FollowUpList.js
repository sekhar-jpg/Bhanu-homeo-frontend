import React, { useEffect, useState } from 'react';

const FollowUpList = ({ caseId }) => {
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    if (!caseId) return;

    fetch(`https://backend-bhanu-app.onrender.com/api/get-follow-ups/${caseId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFollowUps(data.followUps);
        } else {
          alert('Failed to fetch follow-ups!');
        }
      })
      .catch((error) => {
        console.error('Error fetching follow-ups:', error);
        alert('Error fetching follow-ups!');
      });
  }, [caseId]);

  return (
    <div>
      <h3>Previous Follow-Ups</h3>
      {followUps.length === 0 ? (
        <p>No follow-ups found.</p>
      ) : (
        <ul>
          {followUps.map((fu, index) => (
            <li key={index}>
              <strong>Date:</strong> {fu.date} <br />
              <strong>Complaints:</strong> {fu.complaints} <br />
              <strong>Prescription:</strong> {fu.prescription} <br />
              <strong>Remarks:</strong> {fu.remarks} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FollowUpList;
