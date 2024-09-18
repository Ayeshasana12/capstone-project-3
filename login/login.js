document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email-id').value.trim();
    const password = document.getElementById('password-id').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!email || !password) {
      errorMessage.textContent = 'Both email and password are required.';
    } else {
      errorMessage.textContent = '';
      window.location.href = '/signup/signup.html'; // Redirect to signup page
    }
  });