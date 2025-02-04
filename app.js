document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });
  });
});

// JavaScript to toggle the navigation menu and hamburger icon
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('show'); // Toggle the 'show' class
     hamburger.classList.toggle('active'); // Toggle the 'active' class for the X effect
 });


 // Set the target date and time for the countdown
 const targetDate = new Date("2025-02-14T00:00:00").getTime(); // Example: Valentine's Day 2025

 function updateCountdown() {
     const now = new Date().getTime();
     const timeRemaining = targetDate - now;

     if (timeRemaining > 0) {
         // Calculate days, hours, minutes, and seconds
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         // Update the DOM
         document.getElementById("days").textContent = days.toString().padStart(2, "0");
         document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
         document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
         document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
     } else {
         // If the countdown ends, display "00"
         document.getElementById("days").textContent = "00";
         document.getElementById("hours").textContent = "00";
         document.getElementById("minutes").textContent = "00";
         document.getElementById("seconds").textContent = "00";

         clearInterval(countdownInterval); // Stop the interval
     }
 }

 // Update the countdown every second
 const countdownInterval = setInterval(updateCountdown, 1000);

 // Initial call to display the countdown immediately
 updateCountdown()

  // Get the navbar element
  const navbar = document.getElementById("navbar");

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#5B0A08]", "shadow-lg");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white", "shadow-lg");
    }
  });

  
  let currentIndex = 0;
const items = document.querySelectorAll('#carousel > div');
const totalItems = items.length;

function updateCarousel() {
  const itemWidth = window.innerWidth <= 768 ? (100 / 2) : (100 / 5); // 2 images at a time on mobile, 5 images on desktop
  const offset = -(currentIndex * itemWidth) + '%';
  document.querySelector('#carousel').style.transform = `translateX(${offset})`;
}

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Auto slide every 2 seconds
setInterval(nextSlide, 2000);

updateCarousel(); // Initial setup
