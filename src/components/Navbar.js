import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <Link to="/add-case" style={{ margin: "10px" }}>Add Case</Link>
      <Link to="/follow-up" style={{ margin: "10px" }}>Add Follow-Up</Link>
      <Link to="/all-followups" style={{ margin: "10px" }}>All Follow-Ups</Link>
      <Link to="/today" style={{ margin: "10px" }}>Today's Follow-Ups</Link>
    </nav>
  );
};

export default Navbar;
