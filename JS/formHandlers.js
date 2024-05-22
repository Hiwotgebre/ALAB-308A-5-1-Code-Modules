// js/formHandlers.js

// Function to handle the contact form submission
function handleContactFormSubmit(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Displaying the output on the webpage
    document.getElementById('form-output').innerHTML = `
        <h3>Contact Form Submission:</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `;
}

//Function to handle the newsletter form submission

function handleNewsletterFormSubmit(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    const email = document.querySelector('.newsletter-form input[type=email]').value;
    
    // Appending to the existing output
    document.getElementById('form-output').innerHTML += `
        <h3>Newsletter Subscription:</h3>
        <p>Email: ${email}</p>
    `;
}

export function initFormEventListeners() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', handleContactFormSubmit);

    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', handleNewsletterFormSubmit);
}
