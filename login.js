document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            document.getElementById('status').innerText = 'Log in successful!';
            // Redirect to a new page or perform actions upon successful login
        } else {
            document.getElementById('status').innerText = 'Incorrect username or password.';
        }
    });
});
