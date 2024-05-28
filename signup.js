document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (localStorage.getItem(username)) {
            document.getElementById('status').innerText = 'Username already exists. Please choose another one.';
        } else {
            localStorage.setItem(username, password);
            document.getElementById('status').innerText = 'Sign up successful! You can now log in.';
        }
    });
});
