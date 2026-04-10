// js/vibe-check.js

const competitions = [
  { name: "International Mathematical Olympiad (IMO)", country: "International" },
  { name: "International Physics Olympiad (IPhO)", country: "International" },
  { name: "Enact National Business Competition", country: "Nigeria" },
  { name: "Intel International Science & Engineering Fair (ISEF)", country: "USA" },
  { name: "Global Student Entrepreneur Awards (GSEA)", country: "International" },
  { name: "Youth Olympic Games", country: "International" },
  { name: "World Model UN", country: "International" }
  // Will expand to 50+ in Phase 8
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('competitions-list');
  const searchInput = document.getElementById('vibe-search');

  function renderCompetitions(filterText = '') {
    if (!container) return;
    container.innerHTML = '';
    
    const lowerFilter = filterText.toLowerCase();
    
    const filtered = competitions.filter(c => 
      c.name.toLowerCase().includes(lowerFilter) || 
      c.country.toLowerCase().includes(lowerFilter)
    );

    filtered.forEach(comp => {
      const card = document.createElement('div');
      card.className = 'chromatic-glass competition-card';
      card.innerHTML = `
        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${comp.name}</h3>
        <p class="small-caps" style="color: var(--primary-gold);">${comp.country}</p>
      `;
      
      card.addEventListener('click', (e) => {
        if (window.createParticleBurst) {
          // Simple logic to find colors
          const colors = comp.country === 'Nigeria' ? ['#008751', '#FFFFFF'] :
                         comp.country === 'USA' ? ['#B22234', '#FFFFFF', '#3C3B6E'] :
                         ['#C9A84C', '#2E86AB'];
          createParticleBurst(e.clientX, e.clientY, colors, '🌟');
        }
      });
      
      container.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderCompetitions(e.target.value);
    });
  }

  // Initial render
  renderCompetitions();
});
