// GSAP Animation Script
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (navLinks) navLinks.classList.remove('active');
    }
  });
});

// Page Load Animation
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('[class*="fade-in"], [class*="slide-in"]');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
    }, index * 100);
  });
});

// Navbar Background on Scroll
const navbar = document.querySelector('header');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Story Card Animation
const storyCards = document.querySelectorAll('.story-card');
storyCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Counter Animation for Stats
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }
  }, 30);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const number = entry.target.textContent.replace(/[^0-9]/g, '');
      if (number) {
        animateCounter(entry.target, parseInt(number));
      }
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item h3').forEach(item => {
  statObserver.observe(item);
});

// Intersection Observer for Fade-in Effects
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.story-card, .product-card, .innovation-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
