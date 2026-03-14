/* 

   This file does 6 things:
   1. Navbar changes color when you scroll
   2. Hamburger menu open/close on mobile
   3. Testimonial slider (prev/next/dots)
   4. Animated number counters
   5. Contact form validation
   6. Back to Top button appears on scroll
    */


/* 
   1. NAVBAR — change style on scroll
    */

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  // If user scrolled more than 60px, add "scrolled" class
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* 
   2. HAMBURGER MENU
   */

var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('navLinks');

// Toggle menu open/close when hamburger is clicked
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when any nav link is clicked
var allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


/* 
   3. TESTIMONIAL SLIDER
   */

var slides     = document.querySelectorAll('.slide');
var dots       = document.querySelectorAll('.dot');
var prevBtn    = document.getElementById('prevBtn');
var nextBtn    = document.getElementById('nextBtn');
var current    = 0;          // which slide is showing
var autoTimer;               // for auto-play

// Show a specific slide by index number
function showSlide(index) {
  // Hide all slides and unmark all dots
  slides.forEach(function (s) { s.classList.remove('active'); });
  dots.forEach(function (d)   { d.classList.remove('active'); });

  // Wrap around: if index < 0 go to last, if index > last go to first
  current = (index + slides.length) % slides.length;

  // Show the correct slide and dot
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

// Next button
nextBtn.addEventListener('click', function () {
  showSlide(current + 1);
  resetAutoPlay();
});

// Prev button
prevBtn.addEventListener('click', function () {
  showSlide(current - 1);
  resetAutoPlay();
});

// Clicking a dot goes to that slide
dots.forEach(function (dot) {
  dot.addEventListener('click', function () {
    showSlide(parseInt(dot.getAttribute('data-i')));
    resetAutoPlay();
  });
});

// Auto-play: move to next slide every 5 seconds
function startAutoPlay() {
  autoTimer = setInterval(function () {
    showSlide(current + 1);
  }, 5000);
}

// Reset auto-play timer when user clicks
function resetAutoPlay() {
  clearInterval(autoTimer);
  startAutoPlay();
}

// Start auto-play on page load
startAutoPlay();


/* 
   4. ANIMATED COUNTERS
   */

var countElements = document.querySelectorAll('.count');
var countersStarted = false;  // make sure we only run once

// Watch when the counters section comes into view
var counterSection = document.querySelector('.counters');

window.addEventListener('scroll', function () {
  if (countersStarted) return; // already ran, skip

  // Check if the counter section is visible on screen
  var rect = counterSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    countersStarted = true;
    startCounters();
  }
});

function startCounters() {
  countElements.forEach(function (el) {
    var target = parseInt(el.getAttribute('data-target')); // final number
    var current = 0;
    var duration = 2000;           // 2 seconds total
    var steps = 60;                // number of updates
    var increment = target / steps;
    var interval = duration / steps;

    var timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      // Show number without decimals
      el.textContent = Math.floor(current).toLocaleString();
    }, interval);
  });
}


/* --------------------------------------------
   5. CONTACT FORM VALIDATION
   -------------------------------------------- */

var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  // Stop the form from actually submitting (refreshing page)
  event.preventDefault();

  var valid = true; // assume all good, set false if error found

  // --- Clear previous errors ---
  document.getElementById('nameErr').textContent  = '';
  document.getElementById('emailErr').textContent = '';
  document.getElementById('msgErr').textContent   = '';
  document.getElementById('name').classList.remove('error');
  document.getElementById('email').classList.remove('error');
  document.getElementById('message').classList.remove('error');

  // --- Check Name ---
  var nameVal = document.getElementById('name').value.trim();
  if (nameVal === '') {
    document.getElementById('nameErr').textContent = 'Please enter your name.';
    document.getElementById('name').classList.add('error');
    valid = false;
  }

  // --- Check Email ---
  var emailVal = document.getElementById('email').value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email check
  if (emailVal === '') {
    document.getElementById('emailErr').textContent = 'Please enter your email.';
    document.getElementById('email').classList.add('error');
    valid = false;
  } else if (!emailPattern.test(emailVal)) {
    document.getElementById('emailErr').textContent = 'Please enter a valid email.';
    document.getElementById('email').classList.add('error');
    valid = false;
  }

  // --- Check Message ---
  var msgVal = document.getElementById('message').value.trim();
  if (msgVal.length < 10) {
    document.getElementById('msgErr').textContent = 'Message must be at least 10 characters.';
    document.getElementById('message').classList.add('error');
    valid = false;
  }

  // --- If all valid, show success message ---
  if (valid) {
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled    = true;

    // Simulate a short delay (like sending to a server)
    setTimeout(function () {
      document.getElementById('successMsg').style.display = 'block';
      contactForm.reset();
      submitBtn.textContent = 'Send Enquiry';
      submitBtn.disabled    = false;
    }, 1000);
  }
});


/* --------------------------------------------
   6. BACK TO TOP BUTTON
   -------------------------------------------- */

var backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  // Show button after scrolling 400px
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* -----------------------------------------------
   NEWSLETTER BUTTON
  --------------------------------------------- */

var newsletterBtn = document.getElementById('newsletterBtn');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', function () {
    var input = document.getElementById('newsletterEmail');
    if (input.value.trim() === '') {
      alert('Please enter your email address.');
      return;
    }
    newsletterBtn.textContent = 'Subscribed!';
    newsletterBtn.style.backgroundColor = '#10B981';
    input.value = '';

    // Reset button after 3 seconds
    setTimeout(function () {
      newsletterBtn.textContent = 'Subscribe';
      newsletterBtn.style.backgroundColor = '';
    }, 3000);
  });
}

















