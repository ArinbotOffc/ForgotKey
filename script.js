const clientIds = [
  '8Hk9j3Fp5A',
  'R2uY4sJ9mP',
  '7QwX6eV4oL',
  'd6Z8E7V2xW',
  'G5aS6hT7nD',
  '4Fj9vN5qRl',
  'd6Z8E7V2xW',
  'L1mO3tP9cY',
  '9Ku2I7bN3r',
  'C2vU5fY8gH'
];

function validateClientId(clientId) {
  if (clientIdRegex.test(clientId) && clientIds.includes(clientId)) {
    window.location.href = 'result.html';
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
  }
}

const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const clientIdInput = document.getElementById('client-id');
  const clientId = clientIdInput.value;
  validateClientId(clientId);
});
