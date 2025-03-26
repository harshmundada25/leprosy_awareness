// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Validation for Contact Page
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Your message has been sent successfully!");
            contactForm.reset();
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth Scrolling for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// Hover Effects for Social Media Links
document.querySelectorAll(".social-icons a").forEach(icon => {
    icon.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
        this.style.transition = "0.3s ease-in-out";
    });

    icon.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});
