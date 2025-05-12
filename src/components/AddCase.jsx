import React from 'react';

export default function NewCase() {
  const fields = [
    "Name", "Age", "Gender", "Marital Status", "Occupation", "Address", "Phone", "Date of Visit",
    "Chief Complaints", "History of Present Illness", "Past History", "Family History",
    "Appetite", "Cravings & Aversions", "Thirst", "Bowel", "Urine", "Sleep", "Dreams", "Sweat",
    "Thermal Nature (Hot/Cold)", "Habits", "Menstrual History (if applicable)",
    "Mental Symptoms", "General Remarks", "Doctor Observations", "Prescription"
  ];

  const isTextarea = (field) => {
    const longFields = [
      "Chief Complaints", "History of Present Illness", "Past History", "Family History",
      "Appetite", "Cravings & Aversions", "Thirst", "Bowel", "Urine", "Sleep", "Dreams", "Sweat",
      "Thermal Nature (Hot/Cold)", "Habits", "Menstrual History (if applicable)",
      "Mental Symptoms", "General Remarks", "Doctor Observations", "Prescription"
    ];
    return longFields.includes(field);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">New Case</h1>
      <form className="space-y-5">
        {fields.map((field, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-1">{field}</label>
            {isTextarea(field) ? (
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder={`Enter ${field}`}
              ></textarea>
            ) : (
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter ${field}`}
              />
            )}
          </div>
        ))}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
