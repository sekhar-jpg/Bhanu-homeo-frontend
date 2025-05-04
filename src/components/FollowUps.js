import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FollowUps = () => {
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the follow-up data when the component mounts
    const fetchFollowUps = async () => {
      try {
        const response = await axios.get('https://your-backend-url/follow-ups'); // Replace with your backend URL
        setFollowUps(response.data);  // Assuming backend returns follow-up data as an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching follow-ups:', error);
        setLoading(false);
      }
    };

    fetchFollowUps();
  }, []);

  if (loading) {
    return <div>Loading follow-up data...</div>;
  }

  return (
    <div>
      <h2>Follow-Up Cases</h2>
      <ul>
        {followUps.map((followUp, index) => (
          <li key={index}>
            Patient: {followUp.patientName}, Next Follow-Up Date: {followUp.nextFollowUpDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUps;
