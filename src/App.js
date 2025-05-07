import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCase from "./components/AddCase";
import FollowUpForm from "./components/FollowUpForm";
import FollowUpList from "./components/FollowUpList";
import TodayFollowUps from "./components/TodayFollowUps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add-case" element={<AddCase />} />
        <Route path="/follow-up" element={<FollowUpForm />} />
        <Route path="/all-followups" element={<FollowUpList />} />
        <Route path="/today" element={<TodayFollowUps />} />
      </Routes>
    </Router>
  );
}

export default App;
