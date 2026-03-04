const form = document.getElementById('signupForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    messageEl.style.color = 'red';

    if (!name || !email || !password || !confirmPassword) {
        messageEl.textContent = 'All fields are required.';
        return;
    }

    // basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageEl.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password !== confirmPassword) {
        messageEl.textContent = 'Passwords do not match.';
        return;
    }

    if (password.length < 6) {
        messageEl.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // mock success
    messageEl.style.color = 'green';
    messageEl.textContent = 'Signup successful!';
    form.reset();
});