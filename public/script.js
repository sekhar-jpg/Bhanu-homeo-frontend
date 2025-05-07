let editingCaseId = null;

async function fetchCases() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  displayCases(data);
}

function displayCases(cases) {
  const tbody = document.getElementById('caseTableBody');
  tbody.innerHTML = '';

  cases.forEach(c => {
    const row = document.createElement('tr');
    const followupsHtml = (c.followUps || [])
      .map(f => `<div class="followup-list">📅 ${formatDate(f.date)} — ${f.notes || ''}</div>`)
      .join('') || '—';

    row.innerHTML = `
      <td>${c.patientName || '—'}</td>
      <td>${c.phoneNumber || '—'}</td>
      <td>${formatDate(c.visitDate)}</td>
      <td>${c.symptoms || '—'}</td>
      <td>${c.mentalSymptoms || '—'}</td>
      <td>${followupsHtml}</td>
      <td>
        <button onclick="addFollowUp('${c._id}')">➕ Follow-up</button>
        <button onclick="editCase('${c._id}')">✏️ Edit</button>
        <button onclick="deleteCase('${c._id}')">🗑️</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function editCase(caseId) {
  // Store the case ID for editing
  editingCaseId = caseId;
  
  // Fetch case details to pre-fill the form
  fetch(`${apiUrl}/${caseId}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('editName').value = data.patientName;
      document.getElementById('editPhone').value = data.phoneNumber;
      document.getElementById('editSymptoms').value = data.symptoms;
      document.getElementById('editMentalSymptoms').value = data.mentalSymptoms;

      // Show the edit form
      document.getElementById('editForm').style.display = 'block';
    });
}

function saveCase() {
  const updatedCase = {
    patientName: document.getElementById('editName').value,
    phoneNumber: document.getElementById('editPhone').value,
    symptoms: document.getElementById('editSymptoms').value,
    mentalSymptoms: document.getElementById('editMentalSymptoms').value,
  };

  fetch(`${apiUrl}/${editingCaseId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCase)
  })
    .then(response => response.json())
    .then(data => {
      alert('Case updated successfully!');
      closeEditForm();
      fetchCases(); // Refresh the list
    })
    .catch(error => {
      alert('Error updating case!');
      console.error(error);
    });
}

function closeEditForm() {
  document.getElementById('editForm').style.display = 'none';
  editingCaseId = null;
}
