import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CaseSheetForm from "./components/CaseSheetForm";
import FollowUpForm from "./components/FollowUpForm";
import CasesList from "./components/CasesList";
import "./App.css"; // This should style your bottom tabs

// Bottom tab component
const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <NavLink to="/" className="tab-link" end>
        📝 New Case
      </NavLink>
      <NavLink to="/followup" className="tab-link">
        🔁 Follow Up
      </NavLink>
      <NavLink to="/cases" className="tab-link">
        📋 Cases
      </NavLink>
    </div>
  );
};

// Main app component
const App = () => {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<CaseSheetForm />} />
          <Route path="/followup" element={<FollowUpForm />} />
          <Route path="/cases" element={<CasesList />} />
        </Routes>
        <BottomTabs />
      </div>
    </Router>
  );
};

export default App;
