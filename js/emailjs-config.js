// EmailJS Configuration
// This file handles contact form submissions

// Initialize EmailJS with your Public Key
emailjs.init("kDD9j1OOLLSvW6GUh");

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value || 'Not provided';
      const projectType = document.getElementById('projectType').value;
      const message = document.getElementById('message').value;

      // Validate form
      if (!firstName || !lastName || !email || !projectType || !message) {
        alert('Please fill in all required fields');
        return;
      }

      // Prepare email data
      const templateParams = {
        to_email: 'shantanu15feb0000@gmail.com', // Your email
        from_name: firstName + ' ' + lastName,
        from_email: email,
        phone_number: phone,
        project_type: projectType,
        message: message
      };

      // Show loading state
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Send email using EmailJS
      emailjs.send('service_riwpj1t', 'template_z97zbfi', templateParams)
        .then(function(response) {
          console.log('Success:', response);

          // Show success message
          const successMessage = document.getElementById('successMessage');
          successMessage.style.display = 'block';

          // Reset form
          contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(function() {
            successMessage.style.display = 'none';
          }, 5000);

          // Reset button
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, function(error) {
          console.log('Error:', error);
          alert('Failed to send message. Please try again or contact directly via email.');

          // Reset button
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
});
