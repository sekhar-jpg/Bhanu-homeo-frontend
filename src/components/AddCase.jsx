import React, { useState } from "react";
import "./App.css"; // Make sure CSS is linked

const NewCase = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Row: Name, Age, Gender */}
        <div className="row-flex">
          <div className="field-box">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
          <div className="field-box">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
            />
          </div>
          <div className="field-box">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Enter gender"
            />
          </div>
        </div>

        {/* Other vertical fields */}
        <div className="form-group">
          <label>Marital Status</label>
          <input
            type="text"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          />

          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCase;
