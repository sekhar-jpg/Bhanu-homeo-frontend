import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css'; // For styling bottom tab (we'll create this next)
import CaseSheetForm from './components/CaseSheetForm';
import CasesList from './components/CasesList'; // Real or dummy case list screen

// Create Bottom Tabs (For Web)
const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <NavLink to="/" className="tab-link">
        📝 New Case
      </NavLink>
      <NavLink to="/cases" className="tab-link">
        📋 Cases
      </NavLink>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<CaseSheetForm />} />
          <Route path="/cases" element={<CasesList />} />
        </Routes>
        <BottomTabs /> {/* Add the bottom tabs navigation */}
      </div>
    </Router>
  );
};

export default App;
