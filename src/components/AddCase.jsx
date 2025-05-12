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
                <div key={index} className="mb-4">
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">{field}:</label>
                  {isTextarea(field) ? (
                    <textarea
                      id={field}
                      name={field}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows={3}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      id={field}
                      name={field}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
