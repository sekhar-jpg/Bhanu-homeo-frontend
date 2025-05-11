import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomTabs.css'; // We'll create this next

const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <NavLink to="/" className="tab-link">
        📝 New Case
      </NavLink>
      <NavLink to="/cases" className="tab-link">
        📋 Cases
      </NavLink>
      <NavLink to="/followups" className="tab-link">
        🔁 Follow-ups
      </NavLink>
    </div>
  );
};

export default BottomTabs;
