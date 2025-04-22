document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Stop form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('response');

    if (name === '' || email === '' || message === '') {
        response.style.color = 'red';
        response.textContent = 'Please fill in all fields!';
    } else {
        response.style.color = 'green';
        response.textContent = 'Thank you for your message!';
        // Here you can also add: send data to server or reset form
    }
});
