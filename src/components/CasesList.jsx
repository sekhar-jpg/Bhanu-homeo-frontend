import React, { useEffect, useState } from "react";

const CasesList = () => {
  const [cases, setCases] = useState([]);

  // Dummy fetch for now — replace with API call
  useEffect(() => {
    const dummyCases = [
      {
        id: 1,
        name: "Ravi Kumar",
        age: 28,
        gender: "Male",
        phone: "9876543210",
        dateOfVisit: "2025-05-12",
        chiefComplaints: "Headache, anxiety",
      },
      {
        id: 2,
        name: "Sita Devi",
        age: 35,
        gender: "Female",
        phone: "9845123456",
        dateOfVisit: "2025-05-11",
        chiefComplaints: "Joint pain, weakness",
      },
    ];
    setCases(dummyCases);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">All Cases</h2>

      {cases.length === 0 ? (
        <p className="text-center text-gray-500">No cases available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold">{caseItem.name}</h3>
                <span className="text-sm text-gray-500">{caseItem.dateOfVisit}</span>
              </div>
              <p><strong>Age:</strong> {caseItem.age}</p>
              <p><strong>Gender:</strong> {caseItem.gender}</p>
              <p><strong>Phone:</strong> {caseItem.phone}</p>
              <p className="mt-2 text-gray-700"><strong>Complaints:</strong> {caseItem.chiefComplaints}</p>
              <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                View Full Case
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CasesList;
