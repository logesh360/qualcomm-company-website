// Careers Page Functionality
const applyBtns = document.querySelectorAll('.apply-btn');
const modal = document.getElementById('applicationModal');
const closeBtn = document.querySelector('.close-btn');
const applicationForm = document.getElementById('applicationForm');
let selectedPosition = '';

applyBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    selectedPosition = this.parentElement.querySelector('.job-title').textContent;
    document.getElementById('modalPosition').textContent = selectedPosition;
    modal.classList.add('active');
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

if (applicationForm) {
  applicationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('appName').value;
    const email = document.getElementById('appEmail').value;
    const experience = document.getElementById('appExperience').value;
    const submitBtn = applicationForm.querySelector('button[type="submit"]');
    
    if (!name || !email || !experience) {
      alert('Please fill in all fields');
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          position: selectedPosition,
          experience
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        modal.classList.remove('active');
        applicationForm.reset();
      } else {
        alert(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
    }
  });
}
