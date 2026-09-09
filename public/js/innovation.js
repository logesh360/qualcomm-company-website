// Innovation Page Animations
const innovationCards = document.querySelectorAll('.innovation-card');

innovationCards.forEach((card, index) => {
  card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
  item.style.animation = `slideInUp 0.8s ease-out ${index * 0.2}s both`;
});

// Intersection Observer for card animations
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

innovationCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  cardObserver.observe(card);
});

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
