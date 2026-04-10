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
        Object.keys(data).forEach(key => {
          const input = form.elements[key];
          if (input) input.value = data[key];
        });
      } catch(e) {}
    }
  }
});
