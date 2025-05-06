<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .form-section {
      margin-bottom: 20px;
    }
    .form-section label {
      font-weight: bold;
    }
    .form-section input, .form-section textarea {
      width: 100%;
      padding: 8px;
      margin: 5px 0;
      box-sizing: border-box;
    }
    .form-section table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
    }
    .form-section table, .form-section th, .form-section td {
      border: 1px solid #ccc;
    }
    .form-section th, .form-section td {
      padding: 8px;
      text-align: left;
    }
    #alertMessage {
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Submit Case</h1>
  
  <form id="caseForm">
    <div class="form-section">
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      
      <label for="phone">Phone / WhatsApp:</label>
      <input type="text" id="phone" required>
      
      <label for="dateOfVisit">Date of Visit:</label>
      <input type="date" id="dateOfVisit" required>
      
      <label for="followUpDate">Follow Up Date:</label>
      <input type="date" id="followUpDate" required>
    </div>
    
    <div class="form-section">
      <label for="chiefComplaints">Chief Complaints (Problem + Duration + Description):</label>
      <textarea id="chiefComplaints" rows="3" required></textarea>
    </div>

    <div class="form-section">
      <label for="presentIllness">History of Present Illness:</label>
      <textarea id="presentIllness" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="pastHistory">Past History (Childhood diseases, Surgeries, Major illnesses):</label>
      <textarea id="pastHistory" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="familyHistory">Family History (Diabetes, Hypertension, Cancer, etc.):</label>
      <textarea id="familyHistory" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="personalHistory">Personal History (Appetite, Cravings, Thirst, etc.):</label>
      <textarea id="personalHistory" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="mentalSymptoms">Mental Symptoms (Fear, Anxiety, Anger, etc.):</label>
      <textarea id="mentalSymptoms" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="generalRemarks">General Remarks (Energy level, stress, etc.):</label>
      <textarea id="generalRemarks" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label for="observations">Observations by Doctor (Face color, expressions, etc.):</label>
      <textarea id="observations" rows="3"></textarea>
    </div>

    <div class="form-section">
      <label>Prescription (Remedy, Potency, Dose, Instructions):</label>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Remedy Name</th>
            <th>Potency</th>
            <th>Dose</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody id="prescriptionTable">
          <tr>
            <td><input type="date" name="prescriptionDate"></td>
            <td><input type="text" name="remedy"></td>
            <td><input type="text" name="potency"></td>
            <td><input type="text" name="dose"></td>
            <td><input type="text" name="instructions"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="form-section">
      <button type="submit">Submit Case</button>
    </div>
  </form>

  <div id="alertMessage"></div>

  <script>
    document.getElementById('caseForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const prescriptionInputs = document.querySelectorAll('#prescriptionTable input');
      const prescription = [];
      for (let i = 0; i < prescriptionInputs.length; i += 5) {
        prescription.push({
          date: prescriptionInputs[i].value,
          remedy: prescriptionInputs[i + 1].value,
          potency: prescriptionInputs[i + 2].value,
          dose: prescriptionInputs[i + 3].value,
          instructions: prescriptionInputs[i + 4].value
        });
      }

      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        chiefComplaints: document.getElementById('chiefComplaints').value,
        mentalSymptoms: document.getElementById('mentalSymptoms').value,
        dateOfVisit: document.getElementById('dateOfVisit').value,
        followUpDate: document.getElementById('followUpDate').value,
        presentIllness: document.getElementById('presentIllness').value,
        pastHistory: document.getElementById('pastHistory').value,
        familyHistory: document.getElementById('familyHistory').value,
        personalHistory: document.getElementById('personalHistory').value,
        generalRemarks: document.getElementById('generalRemarks').value,
        observations: document.getElementById('observations').value,
        prescription: prescription
      };

      try {
        const response = await fetch('https://backend-bhanu-app.onrender.com/api/cases', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        const alertMessage = document.getElementById('alertMessage');
        if (response.ok) {
          alertMessage.style.color = 'green';
          alertMessage.textContent = 'Case submitted successfully!';
          document.getElementById('caseForm').reset();
        } else {
          alertMessage.style.color = 'red';
          alertMessage.textContent = 'Error: ' + result.error;
        }
      } catch (error) {
        console.error('Error submitting case:', error);
        alert('An error occurred. Please try again.');
      }
    });
  </script>
</body>
</html>
