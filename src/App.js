import React, { useState } from 'react';
import FollowUpForm from './components/FollowUpForm';
import TodayFollowUps from './components/TodayFollowUps';

const App = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  // Function to update the state when a new follow-up is added
  const handleFollowUpAdded = (newFollowUp) => {
    console.log('New Follow-Up Added:', newFollowUp);
    // Optionally, refresh the list of today's follow-ups or update the UI
  };

  return (
    <div>
      <h1>Bhanu Homeopathy</h1>
      
      {/* Show today's follow-ups */}
      <TodayFollowUps />

      {/* When a case is selected, display the follow-up form */}
      {selectedCaseId && (
        <FollowUpForm caseId={selectedCaseId} onFollowUpAdded={handleFollowUpAdded} />
      )}
    </div>
  );
};

export default App;
