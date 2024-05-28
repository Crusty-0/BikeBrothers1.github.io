document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('_UDFiJjFLbcWXxQxO'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_stzt9an', 'template_0c2ea9f', this)
            .then(function() {
                document.getElementById('status').innerText = 'Message sent successfully!';
            }, function(error) {
                document.getElementById('status').innerText = 'Failed to send message. Error: ' + JSON.stringify(error);
            });
    });
});
