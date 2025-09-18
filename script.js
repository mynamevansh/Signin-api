function handleCredentialResponse(response) {
  // response.credential contains the JWT ID token
  // Send this token to your backend for verification
  fetch('/api/auth/google', {
    method: 'POST',
    body: JSON.stringify({ token: response.credential }),
    headers: { 'Content-Type': 'application/json' }
  });
}
