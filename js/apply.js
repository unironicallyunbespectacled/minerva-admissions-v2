// js/apply.js

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.form-step');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const progressBar = document.getElementById('apply-progress');
  const stepIndicator = document.getElementById('step-indicator');
  const form = document.getElementById('application-form');
  
  let currentStep = 0;
  
  // Initialize
  if(steps.length > 0) {
    showStep(currentStep);
    loadDraft();
  }

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = (i === index) ? 'block' : 'none';
    });
    
    stepIndicator.textContent = `Step ${index + 1} of ${steps.length}`;
    progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
    
    if (index === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline-flex';
    }
    
    if (index === steps.length - 1) {
      nextBtn.textContent = 'Submit';
    } else {
      nextBtn.textContent = 'Next';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      saveDraft();
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        // Submit form
        window.location.href = 'complete.html';
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      saveDraft();
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  }
  
  if (form) {
    form.addEventListener('input', () => {
      saveDraft();
    });
  }

  function saveDraft() {
    if (!form) return;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('minerva_apply_draft', JSON.stringify(data));
    
    // Show draft saved indicator briefly
    const indicator = document.getElementById('draft-indicator');
    if(indicator) {
      indicator.style.opacity = '1';
      setTimeout(() => { indicator.style.opacity = '0'; }, 2000);
    }
  }

  function loadDraft() {
    if (!form) return;
    const draft = localStorage.getItem('minerva_apply_draft');
    if (draft) {
      try {
        const data = JSON.parse(draft);
        Object.keys(data).forEach(key => {
          const input = form.elements[key];
          if (input) input.value = data[key];
        });
      } catch(e) {}
    }
  }
});
