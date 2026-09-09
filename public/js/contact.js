// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Simple validation
    if (!name || !email || !message) {
      showMessage('Please fill in all fields', 'error');
      return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        showMessage(data.message, 'success');
        contactForm.reset();
      } else {
        showMessage(data.error || 'An error occurred', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('An error occurred. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = 'form-message ' + type;
  formMessage.style.display = 'block';
  
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Newsletter Subscribe
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = subscribeForm.querySelector('input[type="email"]').value;
    
    if (!email || !isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        subscribeForm.reset();
      } else {
        alert(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });
}
