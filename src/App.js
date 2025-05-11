import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddCase from './components/AddCase';
import FollowUps from './components/FollowUps';
import FollowUpForm from './components/FollowUpForm';
import TodayFollowUps from './components/TodayFollowUps';
import EditCaseForm from './components/EditCaseForm';
import CaseSheetForm from './components/CaseSheetForm'; // ✅ newly added form

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Homepage shows the AddCase screen */}
          <Route path="/" element={<AddCase />} />
          
          {/* Route to see full Case Sheet Form */}
          <Route path="/new-case" element={<CaseSheetForm />} />

          {/* Follow-up related routes */}
          <Route path="/followups" element={<FollowUps />} />
          <Route path="/followups/new/:caseId" element={<FollowUpForm />} />
          <Route path="/followups/today" element={<TodayFollowUps />} />

          {/* Edit case screen */}
          <Route path="/cases/edit/:caseId" element={<EditCaseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
