import React from 'react';

export default function NewCase() {
  const sections = [
    {
      title: "Patient Details",
      fields: ["Name", "Age", "Gender", "Marital Status", "Occupation", "Address", "Phone", "Date of Visit"]
    },
    {
      title: "Symptoms",
      fields: ["Chief Complaints", "History of Present Illness", "Past History", "Family History"]
    },
    {
      title: "General Observations",
      fields: ["Appetite", "Cravings & Aversions", "Thirst", "Bowel", "Urine", "Sleep", "Dreams", "Sweat", "Thermal Nature (Hot/Cold)", "Habits"]
    },
    {
      title: "Female History",
      fields: ["Menstrual History (if applicable)"]
    },
    {
      title: "Mental & Physical Overview",
      fields: ["Mental Symptoms", "General Remarks"]
    },
    {
      title: "Doctor Analysis",
      fields: ["Rubrics selected", "Miasm", "Temperament", "Constitution", "Kingdoms", "Probable remedies", "Reasons for remedy selection"]
    },
    {
      title: "Prescription",
      fields: ["Doctor Observations", "Prescription"]
    }
  ];

  const isTextarea = (field) => {
    const textAreas = ["Chief Complaints", "History of Present Illness", "Past History", "Family History", "Mental Symptoms", "General Remarks", "Rubrics selected", "Reasons for remedy selection", "Doctor Observations", "Prescription"];
    return textAreas.includes(field);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">New Case</h1>
      <form className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-blue-700">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">{field}</label>
                  {isTextarea(field) ? (
                    <textarea
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder={`Enter ${field}`}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter ${field}`}
                    />
                  )}
                </div>
              ))}
            </div>
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
