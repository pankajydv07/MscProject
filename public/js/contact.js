// Smooth scroll functionality for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

console.log("Boilerplate JS loaded with animations.");

// Initialize Google Map
function initMap() {
    const location = { lat: 37.7937, lng: -122.3965 }; // San Francisco coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    // Add marker
    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location'
    });
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }

    if (!terms) {
        alert('Please accept the terms to continue');
        return false;
    }

    // If all validations pass, you can handle form submission here
    // For demonstration, we'll just show an alert
    alert('Form submitted successfully!');
    return false; // Prevent actual form submission for this example
}

// Initialize map when the page loads
window.addEventListener('load', initMap);