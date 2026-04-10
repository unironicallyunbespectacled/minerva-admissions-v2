// js/vibe-check.js

const competitions = [
  // --- AFRICA: NIGERIA & REGIONAL ---
  { name: "Riversman Competition", country: "Nigeria", desc: "A legendary endurance and academic quest in the Niger Delta. Barely documented online, it tests the absolute physical and mental limits of students.", link: "#" },
  { name: "NCS WhizKids IT Competition", country: "Nigeria", desc: "The Nigeria Computer Society's high-pressure gauntlet. Students are grilled on advanced computing theory and logic in community halls.", link: "https://ncs.org.ng" },
  { name: "La-Vogue National Math Championship", country: "Nigeria", desc: "A historic 'mind-war' across all 36 states. The final rounds are legendary for their conceptual difficulty.", link: "https://la-vogueschools.org" },
  { name: "InterswitchSPAK 8.0", country: "Nigeria", desc: "Nigeria's biggest STEM filter. 81 students survive a massive CBT to reach the televised 'blood and sweat' rounds.", link: "https://www.interswitchspak.com" },
  { name: "Cowbellpedia Qualifying Exam", country: "Nigeria", desc: "The 'silent killer'. Over 50,000 students sit for a single-day exam; only 108 survive to see the TV cameras.", link: "https://www.cowbellpedia.ng" },
  { name: "NLNG Science Quiz Competition", country: "Nigeria", desc: "A multi-stage marathon specifically for public schools in Rivers State and Bonny Island.", link: "#" },
  { name: "Roseline Etuokwu Sigma Quiz", country: "Nigeria", desc: "A grueling national quiz. Winners emerge from a brutal state-by-state selection process.", link: "#" },
  { name: "SECROSOFT National Online Debate", country: "Nigeria", desc: "A state-by-state online debate war running for months. No room for error.", link: "#" },
  { name: "NEMA National Essay", country: "Nigeria", desc: "Requires deep policy research into disaster risk reduction, judged by government experts.", link: "#" },
  { name: "African Spelling Bee (ASB)", country: "International", desc: "Champions from 20+ countries tested on words from 21 African languages.", link: "https://africanspellingbee.com" },
  { name: "Ethiopian Science Fair (STEM Synergy)", country: "Ethiopia", desc: "Engineering-heavy model where students build practical solutions to national resource challenges.", link: "#" },
  { name: "WorldSkills Africa", country: "International", desc: "Multi-day gauntlet in vocational fields like bricklaying and CNC milling.", link: "https://worldskillsafrica.org" },
  { name: "SADC Secondary School Essay", country: "International", desc: "A policy war across 16 member states regarding regional energy and industry.", link: "https://www.sadc.int" },
  { name: "Samsung Solve for Tomorrow (SA)", country: "South Africa", desc: "STEM innovation challenge for public school students solving community problems.", link: "https://www.samsung.com/za/solvefortomorrow" },

  // --- ASIA: CIS & KYRGYZSTAN & INDIA ---
  { name: "National Math Olympiad (KG)", country: "Kyrgyzstan", desc: "The IV Stage is a 3-day offline marathon in Bishkek. The ultimate peak for Kyrgyz high schoolers.", link: "#" },
  { name: "Altyn Tuyun Engineering Week", country: "Kyrgyzstan", desc: "Students build functional machines from scrap metal. Physical stress tests determine the winner.", link: "#" },
  { name: "AUCA Mathematical Contest", country: "Kyrgyzstan", desc: "Held on-campus at the American University of Central Asia. Win or lose your future scholarship.", link: "https://auca.kg" },
  { name: "International Zhautykov Olympiad", country: "Kazakhstan", desc: "Elite team-based gauntlet in Math, Physics, and CS. Designed to test elite-level cooperation.", link: "https://izho.kz" },
  { name: "JEE Advanced", country: "India", desc: "The ultimate filter for the IITs. One of the most competitive exams globally.", link: "https://jeeadv.ac.in" },
  { name: "NSTSE (Science Talent Search)", country: "India", desc: "Widely regarded as India's most difficult conceptual secondary exam.", link: "https://www.unifiedcouncil.com" },
  { name: "Indian Computing Olympiad (ICO)", country: "India", desc: "The algorithmic gatekeeper. Only 60 students nationally are awarded medals.", link: "https://www.iarcs.org.in" },
  { name: "ATAL Nirnay-Goa Codes", country: "India", desc: "A 28-day coding and robotics marathon for secondary students in Goa.", link: "#" },
  { name: "Vietnam HS Science & Tech Research", country: "Vietnam", desc: "High-stakes research where gifted students present advanced polyurethane composite solutions.", link: "#" },
  { name: "Hanoi Open Mathematics (HOMC)", country: "Vietnam", desc: "Brutal invitation-only geometry siege with 14-hour study days.", link: "#" },
  { name: "Gaokao", country: "China", desc: "The world's hardest exam. A 10-hour multi-day gauntlet for 12 million students annually.", link: "#" },
  { name: "Coca-Cola STAGE:0 eSPORTS", country: "Japan", desc: "Japan's largest high-school concentration battle. Televised peak strategy.", link: "https://stage0.jp" },

  // --- AMERICAS: BRAZIL & REGIONAL ---
  { name: "OBMEP PIC (Junior Research)", country: "Brazil", desc: "The elite university-level research track for Brazilian math prodigies.", link: "http://www.obmep.org.br" },
  { name: "Olimpíada Brasileira de Física", country: "Brazil", desc: "Features a grueling 7-hour theoretical and experimental final stage on the same day.", link: "#" },
  { name: "Olimpíada Brasileira de Robótica", country: "Brazil", desc: "Students build autonomous robots for disaster zones in intense gymnasium rounds.", link: "#" },
  { name: "Porsche Endurance Series Junior", country: "Brazil", desc: "A high-risk, high-cost motorsport development path for elite young drivers.", link: "#" },
  { name: "Desafiando el Riesgo", country: "USA", desc: "Niche math case competition by the Organization of Latino Actuaries (OLA) where students perform risk assessments.", link: "#" },
  { name: "Regeneron Science Talent Search", country: "USA", desc: "The 'Junior Nobel Prize'. Requires years of original research. Only 40 finalists reach the peak in D.C.", link: "https://www.societyforscience.org" },
  { name: "Modeling the Future Challenge", country: "USA", desc: "Teams must act as actuaries, writing 30-page reports on messy global datasets.", link: "#" },

  // --- EUROPE & GLOBAL ---
  { name: "Romanian Master of Mathematics", country: "Romania", desc: "Invitation-only. Often considered mathematically harder than the IMO.", link: "https://rmm.lghf.ro" },
  { name: "All Souls Prize Fellowship", country: "UK", desc: "The gold standard for academic 'blood and tears'. 1.33% pass rate.", link: "#" },
  { name: "International Linguistics Olympiad", country: "International", desc: "Deciphering unknown scripts and grammars from scratch. Pure logic.", link: "https://ioling.org" },
  { name: "International Psychology Olympiad", country: "International", desc: "Applying complex psychological concepts to actual global hurdles.", link: "#" },
  { name: "International History Olympiad", country: "International", desc: "Features buzzer bowls and 'Hexathlon' speed rounds of historical data.", link: "https://www.historyolympiad.com" },
  
  // --- PREVIOUS CLASSICS (RESTORING ALL) ---
  { name: "IMO (International Math Olympiad)", country: "International", desc: "The premier world championship for high school math.", link: "https://www.imo-official.org" },
  { name: "IPhO (Physics Olympiad)", country: "International", desc: "Annual competition in physics for secondary school students.", link: "http://ipho-olympiad.org" },
  { name: "IChO (Chemistry Olympiad)", country: "International", desc: "The absolute peak of secondary chemical science.", link: "https://www.icho.sk" },
  { name: "IBO (Biology Olympiad)", country: "International", desc: "Testing the brightest biological minds on the planet.", link: "https://www.ibo-info.org" },
  { name: "IOI (Informatics Olympiad)", country: "International", desc: "The world's most prestigious competitive programming contest.", link: "https://ioinformatics.org" },
  { name: "ISEF (Science Fair)", country: "USA", desc: "The world's largest international pre-college science competition.", link: "https://www.societyforscience.org/isef" },
  { name: "World Scholar's Cup (WSC)", country: "International", desc: "A celebration of learning across four grueling events: Debate, Writing, Bowl, and Challenge.", link: "https://www.scholarscup.org" },
  { name: "Diamond Challenge", country: "USA", desc: "Provides a unique opportunity for teens to learn about entrepreneurship.", link: "#" },
  { name: "Hult Prize", country: "International", desc: "The world's largest student competition for social good.", link: "https://www.hultprize.org" },
  { name: "DECA International", country: "USA", desc: "Global competition for emerging leaders and entrepreneurs.", link: "https://www.deca.org" },
  { name: "Conrad Spirit of Innovation", country: "USA", desc: "Challenges students to design the future through STEM and entrepreneurship.", link: "https://www.conradchallenge.org" },
  { name: "SAGE Global", country: "International", desc: "Students for the Advancement of Global Entrepreneurship.", link: "https://www.sageglobal.org" },
  { name: "Technovation Challenge", country: "International", desc: "Girls solving community problems through mobile apps and AI.", link: "https://www.technovation.org" },
  { name: "Invento Business Pitch", country: "Colombia", desc: "High school business and innovation competition in Latin America.", link: "#" },
  { name: "Tribeca Emerging Artists", country: "USA", desc: "Highlighting world-class filmmaking and digital storytelling from high schools.", link: "#" },
  { name: "Scholastic Art & Writing", country: "USA", desc: "The nation's longest-running recognition program for creative teens.", link: "https://www.artandwriting.org" },
  { name: "John Locke Essay", country: "UK", desc: "Elite global essay competition judged by Oxford and Princeton professors.", link: "https://www.johnlockeinstitute.com" },
  { name: "Foyle Young Poets", country: "UK", desc: "The world's largest award for young poets.", link: "https://poetrysociety.org.uk" },
  { name: "Global Social Leaders", country: "UK", desc: "Movement of socially conscious young leaders solving global goals.", link: "https://www.globalsocialleaders.com" },
  { name: "World Model UN", country: "International", desc: "The most internationally diverse university-level (and senior HS) MUN conference.", link: "https://www.worldmun.org" },
  { name: "World Schools Debating", country: "International", desc: "The absolute peak of global secondary school debate.", link: "https://wsdcdebate.org" }
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
      card.style.transition = 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
      card.style.cursor = 'pointer';
      
      card.innerHTML = `
        <div class="card-main-info">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${comp.name}</h3>
          <p class="small-caps" style="color: var(--primary-gold);">${comp.country}</p>
        </div>
        <div class="card-extra-info" style="display: none; margin-top: 16px; border-top: 1px solid var(--glass-border); padding-top: 16px;">
          <p style="font-size: 0.95rem; color: #EEE; line-height: 1.5; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px;">${comp.desc}</p>
          <div style="display: flex; gap: 10px; align-items: center; margin-top: 12px;">
            ${comp.link !== '#' ? `<a href="${comp.link}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 6px 12px;">Official Website</a>` : '<span class="small-caps" style="opacity:0.5;">Shadow Qualifier (No URL)</span>'}
          </div>
        </div>
      `;
      
      card.addEventListener('click', (e) => {
        const extra = card.querySelector('.card-extra-info');
        const isExpanding = extra.style.display === 'none';
        
        // ACCORDION: Close others
        if (isExpanding) {
            document.querySelectorAll('.card-extra-info').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.competition-card').forEach(el => {
                el.style.borderColor = 'rgba(255,255,255,0.2)';
                el.style.transform = 'scale(1)';
            });
            
            extra.style.display = 'block';
            card.style.borderColor = 'var(--primary-gold)';
            card.style.transform = 'scale(1.02)';
            
            if (window.Haptics) Haptics.heavy();
            if (window.AudioScape) AudioScape.pop();
            
            if (window.createParticleBurst) {
                createParticleBurst(e.clientX, e.clientY, ['#C9A84C', '#FFF'], null);
            }
        } else {
            extra.style.display = 'none';
            card.style.borderColor = 'rgba(255,255,255,0.2)';
            card.style.transform = 'scale(1)';
        }
      });
      
      container.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderCompetitions(e.target.value));
  }

  renderCompetitions();
});
