// js/vibe-check.js

const competitions = [
  // Academics & Science
  { name: "International Mathematical Olympiad (IMO)", country: "International" },
  { name: "International Physics Olympiad (IPhO)", country: "International" },
  { name: "International Chemistry Olympiad (IChO)", country: "International" },
  { name: "International Biology Olympiad (IBO)", country: "International" },
  { name: "International Informatics Olympiad (IOI)", country: "International" },
  { name: "Science Bowl International", country: "International" },
  { name: "Intel International Science & Engineering Fair (ISEF)", country: "USA" },
  { name: "FIRST Robotics International", country: "International" },
  { name: "National Science Challenge", country: "Kenya" },
  { name: "STEM Innovation Fair", country: "Nigeria" },
  { name: "Future Scientists Olympiad", country: "India" },
  { name: "EuroScience Olympiad", country: "France" },
  { name: "Asia-Pacific Informatics Olympiad", country: "Japan" },
  { name: "Iberoamerican Math Olympiad", country: "Brazil" },
  { name: "Pan-African Math Olympiad", country: "South Africa" },
  
  // Business & Entrepreneurship
  { name: "Enactus World Cup", country: "International" },
  { name: "Global Student Entrepreneur Awards (GSEA)", country: "International" },
  { name: "UNCTAD Young Entrepreneurs", country: "International" },
  { name: "Enact National Business Competition", country: "Nigeria" },
  { name: "Global Entrepreneurship Summit", country: "International" },
  { name: "Diamond Challenge", country: "USA" },
  { name: "Hult Prize", country: "International" },
  { name: "DECA International Career Development", country: "USA" },
  { name: "Conrad Spirit of Innovation", country: "USA" },
  { name: "SAGE Global", country: "International" },
  { name: "Technovation Challenge", country: "International" },
  { name: "Invento Business Pitch", country: "Colombia" },
  { name: "Startup Weekend", country: "International" },
  { name: "TiE Young Entrepreneurs", country: "India" },
  { name: "Youth Business Fair", country: "Ghana" },
  
  // Arts & Humanities
  { name: "Tribeca Film Festival Emerging Artists", country: "USA" },
  { name: "Young Playwrights Festival", country: "International" },
  { name: "International Young Readers' Prize", country: "International" },
  { name: "Global Youth Forum", country: "International" },
  { name: "World Scholar's Cup", country: "International" },
  { name: "Scholastic Art & Writing", country: "USA" },
  { name: "John Locke Institute Essay", country: "UK" },
  { name: "Commonwealth Essay Competition", country: "UK" },
  { name: "Foyle Young Poets", country: "UK" },
  { name: "Sony World Photography Youth", country: "International" },
  { name: "Poetry Out Loud", country: "USA" },
  
  // Social Impact
  { name: "Bridge Alliance Social Impact", country: "International" },
  { name: "Global Goals Studentpreneur", country: "International" },
  { name: "Youth for the UN SDGs", country: "International" },
  { name: "Ashoka Youth Venture", country: "International" },
  { name: "Peace First Challenge", country: "International" },
  { name: "Earth Prize", country: "International" },
  { name: "ClimateScience Olympiad", country: "International" },
  { name: "Stockholm Junior Water Prize", country: "Sweden" },
  { name: "Prudential Spirit of Community", country: "USA" },
  { name: "Global Social Leaders", country: "UK" },
  
  // Sports & Athletics
  { name: "Youth Olympic Games", country: "International" },
  { name: "IAAF World Junior Championships", country: "International" },
  { name: "International Debate Association", country: "International" },
  { name: "World Model UN", country: "International" },
  { name: "Harvard MUN", country: "USA" },
  { name: "Berkeley MUN", country: "USA" },
  { name: "THIMUN", country: "Netherlands" },
  { name: "World Schools Debating", country: "International" },
  { name: "Asian Schools Debating", country: "Thailand" }
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
