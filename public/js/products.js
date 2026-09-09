// Products Page Animations
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-20px) scale(1.05)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Product Action Buttons
const productBtns = document.querySelectorAll('.product-btn');
productBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const productName = this.parentElement.querySelector('.product-name').textContent;
    alert(`Added "${productName}" to cart!`);
  });
});
