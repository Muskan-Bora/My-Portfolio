function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to close the menu when clicking a link
function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
}

// Close menu when clicking outside the navbar
document.addEventListener("click", function(event) {
    const nav = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".nav-links");

    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
    }
});

////////////////////////////////////////////////////////////////////////////////////

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format Time
    let time = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    document.getElementById("clock").innerText = time;

    // Set Greeting Based on Time
    let greeting;
    if (hours < 12) greeting = "Hello 😊, Good Morning ☀️";
    else if (hours < 18) greeting = "Hello 😊, Good Afternoon 🌤";
    else greeting = "Hello 😊, Good Evening 🌙";

    document.getElementById("greeting").innerText = greeting;
}

setInterval(updateClock, 1000);
updateClock(); // Initial Call

///////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun"); // Change icon
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Store user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.classList.replace("fa-moon", "fa-sun"); // Change to sun icon
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.classList.replace("fa-sun", "fa-moon"); // Change to moon icon
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////

const text = "Welcome to My Developer's World!!..";
let index = 0;

function typeText() {
    document.getElementById('typing-text').innerHTML = text.slice(0, index);
    index++;

    if (index > text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(typeText, 100); // Typing speed

/////////////////////////////////////////////////////////////////////////////////////

// Scroll Animation Logic
document.addEventListener("DOMContentLoaded", function () {
    const leftElement = document.querySelector('.about-left');
    const rightElement = document.querySelector('.about-right');
    const aboutSection = document.querySelector('.about-me');

    function checkScroll() {
        if (!aboutSection) return; // Prevents errors if the section is not found

        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.8) {
            leftElement.classList.add('show');
            rightElement.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check once on page load in case section is already visible
});

/////////////////////////////////////////////////////////////////////////////////////////

// Animation Logic

const skillsContainer = document.querySelector('.skills'); // Updated selector

if (skillsContainer) {
    window.addEventListener('scroll', () => {
        const containerPosition = skillsContainer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (containerPosition < screenPosition) {
            skillsContainer.classList.add('fade-in');
        }
    });
} else {
    console.warn("Element '.skills' not found!");
}


////////////////////////////////////////////////////////////////////////////////////////////

const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(button => {
    button.addEventListener('click', () => {
        const projectDesc = button.parentElement.nextElementSibling;
        projectDesc.classList.toggle('show');
        
        // Change button text from 'Read More' to 'Read Less'
        if (projectDesc.classList.contains('show')) {
            button.textContent = 'Read Less';
        } else {
            button.textContent = 'Read More';
        }
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function() {
    const testimonialCard = document.querySelector('.testimonial-card');
    const cardPosition = testimonialCard.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(cardPosition < screenPosition) {
        testimonialCard.classList.add('active');
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const scrollUpBtn = document.getElementById("scrollUpBtn")
    const achievementsSection = document.getElementById("achievements")

    // Show button when user reaches Achievements section
    window.addEventListener("scroll", function () {
        const achievementsPosition = achievementsSection.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > achievementsPosition) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
        // if (achievementsPosition < window.innerHeight) {
        //     scrollUpBtn.classList.add("show");
        // } else {
        //     scrollUpBtn.classList.remove("show");
        // }
    });

    // Scroll to top when button is clicked
    scrollUpBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     let scrollUpBtn = document.getElementById("scrollUpBtn");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             scrollUpBtn.classList.add("show"); // Show button when scrolled down
//         } else {
//             scrollUpBtn.classList.remove("show"); // Hide when near the top
//         }
//     });

//     scrollUpBtn.addEventListener("click", function () {
//         window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
//     });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", function() {
    const leftContent = document.getElementById("left-content");
    const rightContent = document.getElementById("right-content");
    const sectionPosition = document.getElementById("contact").offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionPosition) {
        leftContent.classList.add("slide-in-left");
        rightContent.classList.add("slide-in-right");
    }
});

// Disable animation for mobile devices
if (window.innerWidth <= 768) {
    document.getElementById("left-content").classList.add("slide-in-left");
    document.getElementById("right-content").classList.add("slide-in-right");
}