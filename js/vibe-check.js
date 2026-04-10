// js/vibe-check.js

const competitions = [
  // Academics & Science
  { name: "International Mathematical Olympiad (IMO)", country: "International", desc: "The World Championship Mathematics Competition for High School students." },
  { name: "International Physics Olympiad (IPhO)", country: "International", desc: "An annual physics competition for high school students." },
  { name: "International Chemistry Olympiad (IChO)", country: "International", desc: "Annual academic competition for high school students in Chemistry." },
  { name: "International Biology Olympiad (IBO)", country: "International", desc: "The premier high school biology student competition worldwide." },
  { name: "International Informatics Olympiad (IOI)", country: "International", desc: "The most prestigious computer science competition for secondary school students." },
  { name: "Science Bowl International", country: "International", desc: "A highly competitive science knowledge tournament." },
  { name: "Intel International Science & Engineering Fair (ISEF)", country: "USA", desc: "The world's largest international pre-college science competition." },
  { name: "FIRST Robotics International", country: "International", desc: "Global robotics competition emphasizing engineering and teamwork." },
  { name: "National Science Challenge", country: "Kenya", desc: "Premier national science innovation challenge." },
  { name: "STEM Innovation Fair", country: "Nigeria", desc: "Highlighting young innovators across Nigeria in STEM." },
  { name: "Future Scientists Olympiad", country: "India", desc: "National Olympiad for promising young scientists." },
  { name: "EuroScience Olympiad", country: "France", desc: "A major European science tournament." },
  { name: "Asia-Pacific Informatics Olympiad", country: "Japan", desc: "Informatics Olympiad for the Asia-Pacific region." },
  { name: "Iberoamerican Math Olympiad", country: "Brazil", desc: "Math Olympiad for Spanish and Portuguese speaking countries." },
  { name: "Pan-African Math Olympiad", country: "South Africa", desc: "The premier mathematics competition in Africa." },
  
  // Business & Entrepreneurship
  { name: "Enactus World Cup", country: "International", desc: "Global competition for student entrepreneurial action for others." },
  { name: "Global Student Entrepreneur Awards (GSEA)", country: "International", desc: "Premier global competition for students who own and operate a business." },
  { name: "UNCTAD Young Entrepreneurs", country: "International", desc: "United Nations competition for young sustainable entrepreneurs." },
  { name: "Enact National Business Competition", country: "Nigeria", desc: "National business pitch and execution competition." },
  { name: "Global Entrepreneurship Summit", country: "International", desc: "International summit and pitch competition." },
  { name: "Diamond Challenge", country: "USA", desc: "Provides a unique opportunity for teens to learn about entrepreneurship." },
  { name: "Hult Prize", country: "International", desc: "The world's largest student competition for social good." },
  { name: "DECA International Career Development", country: "USA", desc: "Global competition for emerging leaders and entrepreneurs." },
  { name: "Conrad Spirit of Innovation", country: "USA", desc: "Challenges students to design the future." },
  { name: "SAGE Global", country: "International", desc: "Students for the Advancement of Global Entrepreneurship." },
  { name: "Technovation Challenge", country: "International", desc: "Girls and families solving community problems with technology." },
  { name: "Invento Business Pitch", country: "Colombia", desc: "National startup and pitch competition." },
  { name: "Startup Weekend", country: "International", desc: "54-hour event where developers, designers, and marketers build startups." },
  { name: "TiE Young Entrepreneurs", country: "India", desc: "Fostering future generation of entrepreneurs." },
  { name: "Youth Business Fair", country: "Ghana", desc: "Showcase of young entrepreneurial talent." },
  
  // Arts & Humanities
  { name: "Tribeca Film Festival Emerging Artists", country: "USA", desc: "Highlighting young and emerging filmmakers." },
  { name: "Young Playwrights Festival", country: "International", desc: "Global competition for young theatrical writers." },
  { name: "International Young Readers' Prize", country: "International", desc: "Celebrating global youth literacy and writing." },
  { name: "Global Youth Forum", country: "International", desc: "Forum for youth perspectives on global humanities." },
  { name: "World Scholar's Cup", country: "International", desc: "International team academic program." },
  { name: "Scholastic Art & Writing", country: "USA", desc: "The nation's longest-running educational initiative for creative teens." },
  { name: "John Locke Institute Essay", country: "UK", desc: "Prestigious global essay competition." },
  { name: "Commonwealth Essay Competition", country: "UK", desc: "The world's oldest international schools' writing competition." },
  { name: "Foyle Young Poets", country: "UK", desc: "The biggest poetry competition for 11-17 year olds in the world." },
  { name: "Sony World Photography Youth", country: "International", desc: "Global photography competition for youth." },
  { name: "Poetry Out Loud", country: "USA", desc: "National arts education program and poetry recitation competition." },
  
  // Social Impact
  { name: "Bridge Alliance Social Impact", country: "International", desc: "Global challenge for civic engagement and social impact." },
  { name: "Global Goals Studentpreneur", country: "International", desc: "Entrepreneurship targeting the UN Sustainable Development Goals." },
  { name: "Youth for the UN SDGs", country: "International", desc: "Action challenge for youth to achieve the SDGs." },
  { name: "Ashoka Youth Venture", country: "International", desc: "Empowering young people to be changemakers." },
  { name: "Peace First Challenge", country: "International", desc: "Supporting young people to create peacemaking projects." },
  { name: "Earth Prize", country: "International", desc: "Global environmental sustainability competition for students." },
  { name: "ClimateScience Olympiad", country: "International", desc: "Student competition to find solutions to climate change." },
  { name: "Stockholm Junior Water Prize", country: "Sweden", desc: "International water science competition." },
  { name: "Prudential Spirit of Community", country: "USA", desc: "Recognizing students for outstanding volunteer service." },
  { name: "Global Social Leaders", country: "UK", desc: "Movement of socially conscious young leaders." },
  
  // Sports & Athletics
  { name: "Youth Olympic Games", country: "International", desc: "Elite international multi-sport event for athletes aged 15 to 18." },
  { name: "IAAF World Junior Championships", country: "International", desc: "World championships for junior track and field athletes." },
  { name: "International Debate Association", country: "International", desc: "The premier global debating championship." },
  { name: "World Model UN", country: "International", desc: "The most internationally diverse college-level Model UN conference." },
  { name: "Harvard MUN", country: "USA", desc: "High school Model UN conference hosted by Harvard." },
  { name: "Berkeley MUN", country: "USA", desc: "Premier Model UN conference on the West Coast." },
  { name: "THIMUN", country: "Netherlands", desc: "The Hague International Model United Nations." },
  { name: "World Schools Debating", country: "International", desc: "Global debating competition for high school students." },
  { name: "Asian Schools Debating", country: "Thailand", desc: "Premier debating tournament in Asia." }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('competitions-list');
  const searchInput = document.getElementById('vibe-search');

  // Modal logic for Easter Egg expansion
  const modal = document.createElement('div');
  modal.className = 'chromatic-glass';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%) scale(0.9)';
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  modal.style.zIndex = '10000';
  modal.style.padding = '32px';
  modal.style.maxWidth = '500px';
  modal.style.width = '90%';
  modal.style.textAlign = 'center';
  modal.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
  document.body.appendChild(modal);

  function showModal(comp) {
    modal.innerHTML = `
      <h2 style="color: var(--primary-gold); margin-bottom: 12px;">${comp.name}</h2>
      <p class="small-caps" style="margin-bottom: 16px;">${comp.country}</p>
      <p style="font-size: 1.1rem;">${comp.desc}</p>
      <button class="btn btn-secondary mt-4" onclick="this.parentElement.style.opacity='0'; this.parentElement.style.pointerEvents='none'; this.parentElement.style.transform='translate(-50%, -50%) scale(0.9)';">Close</button>
    `;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
  }

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
          // Simple logic to find colors based on country mapping
          const colors = comp.country === 'Nigeria' ? ['#008751', '#FFFFFF'] :
                         comp.country === 'USA' ? ['#B22234', '#FFFFFF', '#3C3B6E'] :
                         comp.country === 'UK' ? ['#C8102E', '#FFFFFF', '#012169'] :
                         comp.country === 'India' ? ['#FF9933', '#FFFFFF', '#138808'] :
                         comp.country === 'Kenya' ? ['#000000', '#BB0000', '#006600', '#FFFFFF'] :
                         comp.country === 'Brazil' ? ['#009B3A', '#FEDF00', '#002776'] :
                         ['#C9A84C', '#2E86AB']; // International default
          
          let codeMap = {
            'Nigeria': 'ng', 'USA': 'us', 'UK': 'gb', 'India': 'in', 
            'Kenya': 'ke', 'France': 'fr', 'South Africa': 'za',
            'Brazil': 'br', 'Japan': 'jp', 'Colombia': 'co', 'Ghana': 'gh',
            'Sweden': 'se', 'Thailand': 'th', 'Netherlands': 'nl'
          };
          let code = codeMap[comp.country] || null;

          createParticleBurst(e.clientX, e.clientY, colors, code);
        }
        if (window.AudioScape) AudioScape.chime();
        showModal(comp);
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
