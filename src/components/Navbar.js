import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <Link to="/" style={{ margin: "10px" }}>Add Case</Link>
      <Link to="/followups" style={{ margin: "10px" }}>All Follow-Ups</Link>
      <Link to="/followups/today" style={{ margin: "10px" }}>Today's Follow-Ups</Link>
    </nav>
  );
};

export default Navbar;
