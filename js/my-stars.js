// js/my-stars.js
// Phase 7: My Stars Questionnaire (6-stage Socratic reflection)

document.addEventListener('DOMContentLoaded', () => {
  const stages = document.querySelectorAll('.star-stage');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const progressBar = document.getElementById('stars-progress');
  const stepIndicator = document.getElementById('step-indicator');
  const form = document.getElementById('stars-form');
  
  const stageColors = [
    '#FF9F43', // 1: Orange
    '#EE5A6F', // 2: Red
    '#2E86AB', // 3: Blue
    '#A23B72', // 4: Purple
    '#F18F01', // 5: Orange-Red
    '#C9A84C'  // 6: Gold
  ];
  
  let currentStage = 0;
  
  // Toast container for Welcome Back
  const toastContainer = document.createElement('div');
  toastContainer.style.position = 'fixed';
  toastContainer.style.bottom = '20px';
  toastContainer.style.right = '20px';
  toastContainer.style.zIndex = '9999';
  document.body.appendChild(toastContainer);

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'chromatic-glass';
    toast.style.padding = '12px 24px';
    toast.style.marginBottom = '10px';
    toast.style.color = '#FFF';
    toast.style.fontSize = '0.9rem';
    toast.style.animation = 'bloomEntry 0.3s ease-out';
    toast.innerHTML = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }
  
  if (stages.length > 0) {
    showStage(currentStage);
    loadDraft();
  }

  function showStage(index) {
    stages.forEach((stage, i) => {
      stage.style.display = (i === index) ? 'block' : 'none';
    });
    
    stepIndicator.textContent = `Stage ${index + 1} of ${stages.length}`;
    progressBar.style.width = `${((index + 1) / stages.length) * 100}%`;
    progressBar.style.backgroundColor = stageColors[index] || stageColors[0];
    
    if (index === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline-flex';
    }
    
    if (index === stages.length - 1) {
      nextBtn.textContent = 'Complete & Apply';
    } else {
      nextBtn.textContent = 'Next';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Soft validation
      const currentTextarea = stages[currentStage].querySelector('textarea');
      if (currentTextarea && currentTextarea.value.trim().length < 10) {
        showToast('<b>Hey there!</b> Please share a bit more detail before moving on.');
        if (window.Haptics) Haptics.light();
        return;
      }

      saveDraft();
      if (currentStage < stages.length - 1) {
        currentStage++;
        showStage(currentStage);
      } else {
        window.location.href = '../apply/index.html';
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      saveDraft();
      if (currentStage > 0) {
        currentStage--;
        showStage(currentStage);
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
    localStorage.setItem('minerva_mystars_draft', JSON.stringify(data));
    
    const indicator = document.getElementById('draft-indicator');
    if(indicator) {
      indicator.style.opacity = '1';
      setTimeout(() => { indicator.style.opacity = '0'; }, 2000);
    }
  }

  function loadDraft() {
    if (!form) return;
    const draft = localStorage.getItem('minerva_mystars_draft');
    if (draft) {
      try {
        const data = JSON.parse(draft);
        let hasData = false;
        Object.keys(data).forEach(key => {
          const input = form.elements[key];
          if (input && data[key].trim() !== '') {
            input.value = data[key];
            hasData = true;
          }
        });
        if (hasData) {
          setTimeout(() => showToast('<b>Welcome back!</b> We saved your progress.'), 500);
        }
      } catch(e) {}
    }
  }
});
