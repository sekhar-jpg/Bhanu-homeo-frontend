import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomTabs.css';
import { FaPlus, FaListAlt, FaSync } from 'react-icons/fa'; // Example icons

const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <NavLink to="/" className="tab-link">
        <span aria-hidden="true"><FaPlus /></span>
        New Case
      </NavLink>
      <NavLink to="/cases" className="tab-link">
        <span aria-hidden="true"><FaListAlt /></span>
        Cases
      </NavLink>
      <NavLink to="/followups" className="tab-link">
        <span aria-hidden="true"><FaSync /></span>
        Follow-ups
      </NavLink>
    </div>
  );
};

export default BottomTabs;
