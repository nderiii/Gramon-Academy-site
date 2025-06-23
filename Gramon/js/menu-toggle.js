document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_rew15mb', 'template_leptt6j', formData)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<p style="color:green;">Thank you for your message. We will get back to you soon!</p>';
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<p style="color:red;">There was an error sending your message. Please try again later.</p>';
        });
});