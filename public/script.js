const BASE_URL = 'https://backend-bhanu-app.onrender.com';

// Submit Case
document.getElementById('caseForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const caseData = {
    name: document.getElementById('name').value,
    age: parseInt(document.getElementById('age').value),
    phone: document.getElementById('phone').value,
    symptoms: document.getElementById('symptoms').value,
    date: document.getElementById('date').value,
  };

  const response = await fetch(`${BASE_URL}/submit-case`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(caseData),
  });

  const data = await response.json();
  alert(data.message || 'Case submitted!');
  document.getElementById('caseForm').reset();
});

// Fetch All Cases
async function fetchCases() {
  const response = await fetch(`${BASE_URL}/cases`);
  const cases = await response.json();
  const list = document.getElementById('casesList');
  list.innerHTML = '';
  cases.forEach((c) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${c.name}</strong> (Age: ${c.age}) - ${c.symptoms} <br>
      Date: ${new Date(c.date).toLocaleDateString()} - Phone: ${c.phone}
      <button onclick="deleteCase('${c._id}')">Delete</button>
      <button onclick="showFollowUpForm('${c._id}')">Add Follow-up</button>
    `;
    list.appendChild(li);
  });
}

// Delete Case
async function deleteCase(caseId) {
  const confirmDelete = confirm('Are you sure you want to delete this case?');
  if (!confirmDelete) return;

  await fetch(`${BASE_URL}/cases/${caseId}`, { method: 'DELETE' });
  fetchCases();
}

// Show Follow-Up Form
function showFollowUpForm(caseId) {
  const followUpSection = document.getElementById('followUpSection');
  followUpSection.style.display = 'block';
  followUpSection.dataset.caseId = caseId;
}

// Submit Follow-Up
document.getElementById('followUpForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const caseId = document.getElementById('followUpSection').dataset.caseId;
  const followUpData = {
    date: document.getElementById('followUpDate').value,
    notes: document.getElementById('followUpNotes').value,
  };

  await fetch(`${BASE_URL}/cases/${caseId}/follow-ups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(followUpData),
  });

  alert('Follow-up added!');
  document.getElementById('followUpForm').reset();
  document.getElementById('followUpSection').style.display = 'none';
});

// Fetch Follow-Ups
async function fetchFollowUps() {
  const response = await fetch(`${BASE_URL}/follow-ups`);
  const followUps = await response.json();
  const list = document.getElementById('followUpList');
  list.innerHTML = '';
  followUps.forEach((f) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${f.case.name}</strong> - ${f.notes} <br>
      Date: ${new Date(f.date).toLocaleDateString()}
    `;
    list.appendChild(li);
  });
}

// Fetch Today's Follow-Ups
async function fetchTodayFollowUps() {
  const response = await fetch(`${BASE_URL}/today-followups`);
  const todayFollowUps = await response.json();
  const list = document.getElementById('todayFollowUpList');
  list.innerHTML = '';
  todayFollowUps.forEach((f) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${f.case.name}</strong> - Phone: ${f.case.phone} <br>
      Notes: ${f.notes} | Date: ${new Date(f.date).toLocaleDateString()}
    `;
    list.appendChild(li);
  });
}

// Page-based initialization
if (window.location.pathname.endsWith('cases.html')) fetchCases();
if (window.location.pathname.endsWith('followups.html')) fetchFollowUps();
if (window.location.pathname.endsWith('today.html')) fetchTodayFollowUps();
