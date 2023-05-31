document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const clientId = urlParams.get('clientId');
  const username = urlParams.get('username');
  const key = urlParams.get('key');
  
  const clientIdElement = document.querySelector('#login-form .form-item:nth-child(1) p:nth-child(2)');
  const usernameElement = document.querySelector('#login-form .form-item:nth-child(1) p:nth-child(3)');
  const keyElement = document.querySelector('#login-form .form-item:nth-child(1) p:nth-child(4)');
  
  clientIdElement.textContent = `Your Client Id: ${clientId}`;
  usernameElement.textContent = `Your Username: ${username}`;
  keyElement.textContent = `Your Key: ${key}`;
});
