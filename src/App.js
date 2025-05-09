import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddCase from './components/AddCase';
import FollowUps from './components/FollowUps';
import FollowUpForm from './components/FollowUpForm';
import TodayFollowUps from './components/TodayFollowUps';
import EditCaseForm from './components/EditCaseForm';
import FaceUpload from './components/FaceUpload'; // 👈 Import chesam

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddCase />} />
          <Route path="/followups" element={<FollowUps />} />
          <Route path="/followups/new/:caseId" element={<FollowUpForm />} />
          <Route path="/followups/today" element={<TodayFollowUps />} />
          <Route path="/cases/edit/:caseId" element={<EditCaseForm />} />
          <Route path="/face-upload" element={<FaceUpload />} /> {/* 👈 New Route added */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
