// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  mirror: true,
});

// Navigation Bullets
const bullets = document.querySelectorAll(".bullet");
const sections = document.querySelectorAll(".slide");

// Update active bullet based on scroll position
function updateActiveBullet() {
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      bullets.forEach((bullet) => bullet.classList.remove("active"));
      bullets[index].classList.add("active");
    }
  });
}

// Smooth scroll to section when bullet is clicked
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", (e) => {
    e.preventDefault();
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});

// Update active bullet on scroll
window.addEventListener("scroll", updateActiveBullet);

// Parallax effect for hero image
const heroImage = document.querySelector(".hero-image img");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  heroImage.style.transform = `perspective(1000px) rotateY(-5deg) translateY(${
    scrollPosition * 0.1
  }px)`;
});

// Add hover effect to service icons
const serviceIcons = document.querySelectorAll(".icon");
serviceIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-10px) scale(1.05)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0) scale(1)";
  });
});

// Add animation to steps
const steps = document.querySelectorAll(".step");
steps.forEach((step, index) => {
  step.style.animationDelay = `${index * 0.2}s`;
});

// Add hover effect to download buttons
const downloadButtons = document.querySelectorAll(".download-btn");
downloadButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

// Add animation to QR code
const qrCode = document.querySelector(".qr-code img");
qrCode.addEventListener("mouseenter", () => {
  qrCode.style.transform = "scale(1.05)";
});

qrCode.addEventListener("mouseleave", () => {
  qrCode.style.transform = "scale(1)";
});

// Add animation to social icons
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-3px)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0)";
  });
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll(
  ".step, .download-btn, .qr-code, .contact-info, .footer-links, .social-icons"
);

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Initialize reveal on load
revealOnScroll();

// How It Works section animation
const stepImages = document.querySelectorAll(".phone-screen img");
let currentStep = 0;

function updateStep() {
  // Remove active class from all steps and images
  steps.forEach((step) => step.classList.remove("active"));
  stepImages.forEach((img) => img.classList.remove("active"));

  // Add active class to current step and corresponding image
  steps[currentStep].classList.add("active");
  stepImages[currentStep].classList.add("active");

  // Move to next step
  currentStep = (currentStep + 1) % 3;
}

// Start the step animation when slide2 is in view
const slide2 = document.getElementById("slide2");
let stepInterval;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the interval when slide2 is visible
        currentStep = 0; // Reset to first step
        updateStep(); // Show first step immediately
        stepInterval = setInterval(updateStep, 3000);
      } else {
        // Clear the interval when slide2 is not visible
        clearInterval(stepInterval);
        currentStep = 0;
        steps.forEach((step) => step.classList.remove("active"));
        stepImages.forEach((img) => img.classList.remove("active"));
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(slide2);

// Smooth scroll for navigation bullets
document.querySelectorAll(".nav-bullets a").forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
