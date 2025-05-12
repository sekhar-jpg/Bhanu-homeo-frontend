import React, { useState } from 'react';

const NewCase = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    address: '',
    phone: '',
    dateOfVisit: '',
    complaints: '',
    presentIllness: '',
    pastHistory: '',
    familyHistory: '',
    appetite: '',
    thirst: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit logic here
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">New Case</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Enter patient name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Enter age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Enter gender"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Marital Status</label>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Single / Married / etc"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Occupation"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Visit</label>
            <input
              type="date"
              name="dateOfVisit"
              value={formData.dateOfVisit}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Chief Complaints</label>
          <textarea
            name="complaints"
            value={formData.complaints}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2"
            rows={2}
            placeholder="Enter chief complaints"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">History of Present Illness</label>
          <textarea
            name="presentIllness"
            value={formData.presentIllness}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2"
            rows={2}
            placeholder="Enter history of present illness"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Past History</label>
          <textarea
            name="pastHistory"
            value={formData.pastHistory}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2"
            rows={2}
            placeholder="Enter past history"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Family History</label>
          <textarea
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2"
            rows={2}
            placeholder="Enter family history"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Appetite</label>
            <input
              type="text"
              name="appetite"
              value={formData.appetite}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Appetite"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Thirst</label>
            <input
              type="text"
              name="thirst"
              value={formData.thirst}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Thirst"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCase;
