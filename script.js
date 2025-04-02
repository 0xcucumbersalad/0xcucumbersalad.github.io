const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch('/users/change-password', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken 
    },
    body: JSON.stringify({
        password: 'admin123',
        password_confirmation: 'admin123'
    })
}).then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));

