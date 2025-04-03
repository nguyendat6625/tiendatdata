// Navigation
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Sticky Navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }
    }
  });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Skill Bars Animation
const skillBars = document.querySelectorAll(".skill-progress");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
};

// Intersection Observer for Skill Bars
const skillsSection = document.querySelector(".skills");
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log("Form submitted:", data);

    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = "Message sent successfully!";
    contactForm.appendChild(successMessage);

    // Reset form
    contactForm.reset();

    // Remove success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  });
}

// Project Cards Hover Effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Publication Items Hover Effect
const publicationItems = document.querySelectorAll(".publication-item");

publicationItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(10px)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0)";
  });
});

// Add CSS for success message
const style = document.createElement("style");
style.textContent = `
    .success-message {
        background-color: #00b894;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize AOS (Animate On Scroll) for elements
document.addEventListener("DOMContentLoaded", () => {
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".project-card, .publication-item, .skill-item, .stat-item"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial styles
  const elements = document.querySelectorAll(
    ".project-card, .publication-item, .skill-item, .stat-item"
  );
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);
  // Run once on load
  animateOnScroll();
});
