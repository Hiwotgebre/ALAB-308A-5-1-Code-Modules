// // js/formHandlers.js

// // Function to handle the contact form submission
// function handleContactFormSubmit(event) {
//     event.preventDefault();  // Prevent the default form submission behavior
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     console.log('Contact Form Submission:', {name, email, message});
//     // Ideally, here you'd make a POST request to a server
// }

// // Function to handle the newsletter form submission
// function handleNewsletterFormSubmit(event) {
//     event.preventDefault();  // Prevent the default form submission behavior
//     const email = document.querySelector('.newsletter-form input[type=email]').value;
//     console.log('Newsletter Subscription:', {email});
//     // And here, you might add this email to a mailing list database
// }

// export function initFormEventListeners() {
//     const contactForm = document.querySelector('.contact-form');
//     contactForm.addEventListener('submit', handleContactFormSubmit);

//     const newsletterForm = document.querySelector('.newsletter-form');
//     newsletterForm.addEventListener('submit', handleNewsletterFormSubmit);
// }
