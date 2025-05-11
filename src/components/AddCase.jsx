import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddCase = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    address: '',
    phone: '',
    dateOfVisit: '',
    chiefComplaints: '',
    historyPresentIllness: '',
    pastHistory: '',
    familyHistory: '',
    appetite: '',
    cravingsAversions: '',
    thirst: '',
    bowelMovement: '',
    urine: '',
    sleep: '',
    dreams: '',
    sweat: '',
    thermal: '',
    habits: '',
    menstrual: '',
    mentalSymptoms: '',
    generalRemarks: '',
    doctorObservations: '',
    prescription: ''
  });

  const [faceImage, setFaceImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCapture = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 320, 240);
    canvas.toBlob((blob) => {
      setFaceImage(blob);
    }, 'image/jpeg');
  };

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (faceImage) {
      data.append('faceImage', faceImage, 'face.jpg');
    }

    try {
      await axios.post('https://your-backend-url.com/submit-case', data);
      alert('Case submitted successfully!');

      // ✅ Reset the form after successful submission
      setFormData({
        name: '',
        age: '',
        gender: '',
        maritalStatus: '',
        occupation: '',
        address: '',
        phone: '',
        dateOfVisit: '',
        chiefComplaints: '',
        historyPresentIllness: '',
        pastHistory: '',
        familyHistory: '',
        appetite: '',
        cravingsAversions: '',
        thirst: '',
        bowelMovement: '',
        urine: '',
        sleep: '',
        dreams: '',
        sweat: '',
        thermal: '',
        habits: '',
        menstrual: '',
        mentalSymptoms: '',
        generalRemarks: '',
        doctorObservations: '',
        prescription: ''
      });
      setFaceImage(null);

      // Stop camera stream after submission
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      videoRef.current.srcObject = null;

    } catch (err) {
      alert('Error submitting case');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Submit Patient Case - Bhanu Homeopathy AI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['name', 'Name'],
          ['age', 'Age'],
          ['gender', 'Gender'],
          ['maritalStatus', 'Marital Status'],
          ['occupation', 'Occupation'],
          ['address', 'Address'],
          ['phone', 'Phone'],
          ['dateOfVisit', 'Date of Visit (dd/mm/yyyy)'],
          ['chiefComplaints', 'Chief Complaints'],
          ['historyPresentIllness', 'History of Present Illness'],
          ['pastHistory', 'Past History'],
          ['familyHistory', 'Family History'],
          ['appetite', 'Appetite'],
          ['cravingsAversions', 'Cravings & Aversions'],
          ['thirst', 'Thirst'],
          ['bowelMovement', 'Bowel Movement'],
          ['urine', 'Urine'],
          ['sleep', 'Sleep'],
          ['dreams', 'Dreams'],
          ['sweat', 'Sweat'],
          ['thermal', 'Thermal Nature (Hot/Cold)'],
          ['habits', 'Habits'],
          ['menstrual', 'Menstrual History (if applicable)'],
          ['mentalSymptoms', 'Mental Symptoms'],
          ['generalRemarks', 'General Remarks'],
          ['doctorObservations', 'Doctor Observations'],
          ['prescription', 'Prescription']
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required={name === 'name' || name === 'phone'}
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Capture Patient Face</label>
          <video ref={videoRef} width="320" height="240" autoPlay className="mb-2 border" />
          <canvas ref={canvasRef} width="320" height="240" className="hidden" />
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={startCamera} className="bg-blue-500 text-white px-4 py-1 rounded">Start Camera</button>
            <button type="button" onClick={handleCapture} className="bg-yellow-500 text-white px-4 py-1 rounded">Capture Image</button>
          </div>
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Case</button>
      </form>
    </div>
  );
};

export default AddCase;
