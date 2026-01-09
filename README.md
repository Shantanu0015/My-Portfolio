# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design
- Animated background
- Mobile-friendly navigation
- Smooth scrolling
- Contact form with email functionality
- Modern UI with dark theme

## Setup

1. Clone or download the files
2. Open `index.html` in a web browser

## Contact Form Setup

The contact form uses EmailJS to send emails. To make it functional:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`
4. In `script.js`, replace the placeholders:
   - `YOUR_PUBLIC_KEY` with your EmailJS public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Inter)
- EmailJS for contact form

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

All rights reserved.