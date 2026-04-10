// js/vibe-check.js

const competitions = [
  // AFRICA: The Ghost Gauntlets
  { name: "Riversman Competition (Nigeria)", country: "Nigeria", desc: "A grueling endurance and knowledge quest in the Niger Delta. Barely documented online, it tests the absolute physical and mental limits of secondary students.", link: "#" },
  { name: "NCS WhizKids IT Competition", country: "Nigeria", desc: "The Nigeria Computer Society's high-pressure gauntlet. Students are grilled on advanced computing theory and logic in community halls.", link: "https://ncs.org.ng" },
  { name: "La-Vogue National Math Championship", country: "Nigeria", desc: "A historic 'mind-war' across all 36 states. Forms are distributed through physical LGA offices; the final rounds are legendary for their difficulty.", link: "https://la-vogueschools.org" },
  { name: "InterswitchSPAK 8.0", country: "Nigeria", desc: "Nigeria's biggest STEM filter. Thousands take a CBT exam; only 81 survive to reach the televised 'blood and sweat' rounds.", link: "https://www.interswitchspak.com" },
  { name: "Cowbellpedia Qualifying Exam", country: "Nigeria", desc: "The 'silent killer'. Over 50,000 students sit for a single-day paper exam. Only 108 survive to see the TV cameras.", link: "https://www.cowbellpedia.ng" },
  { name: "Mbaise Senior Secondary Math", country: "Nigeria", desc: "A hyper-local regional contest in Imo State aimed at discovering elite 'hidden' talent in rural areas.", link: "#" },
  { name: "African Spelling Bee (ASB)", country: "International", desc: "Champions from 20+ countries tested on words from 21 African languages. The ultimate continental linguistic siege.", link: "https://africanspellingbee.com" },
  { name: "Ethiopian Science Fair (STEM Synergy)", country: "Ethiopia", desc: "Students must build practical, working engineering solutions to national infrastructure challenges. Theory is not enough.", link: "#" },
  { name: "WorldSkills Africa", country: "International", desc: "The 'Skills Olympics'. A multi-day physical gauntlet in fields like bricklaying and CNC milling for vocational students.", link: "https://worldskillsafrica.org" },

  // ASIA & CIS: The Pressure Cookers
  { name: "National Math Olympiad (Kyrgyzstan)", country: "Kyrgyzstan", desc: "The IV Stage is a 3-day offline marathon in Bishkek. No web presence; follow @imo_kg on Telegram for the only crumbs of info.", link: "#" },
  { name: "Altyn Tuyun Engineering Week", country: "Kyrgyzstan", desc: "Students build machines from scrap metal and logic controllers. If the machine fails the physical stress test, you are out.", link: "#" },
  { name: "AUCA Mathematical Contest", country: "Kyrgyzstan", desc: "Held on-campus at the American University of Central Asia. Winners earn life-changing, rare scholarships.", link: "https://auca.kg" },
  { name: "International Zhautykov Olympiad (IZhO)", country: "Kazakhstan", desc: "A team-based gauntlet in Math, Physics, and CS. Problems are designed to test elite-level cooperation.", link: "https://izho.kz" },
  { name: "JEE Advanced", country: "India", desc: "The ultimate gateway. Only the top 1% of millions qualify for the IITs. One of the most competitive tests on the planet.", link: "https://jeeadv.ac.in" },
  { name: "NSTSE (Science Talent Search)", country: "India", desc: "Widely regarded as India's most difficult secondary exam, overshadowing even the JEE in pure conceptual difficulty.", link: "https://www.unifiedcouncil.com" },
  { name: "Vietnam Applied Math Competition", country: "Vietnam", desc: "A rigorous regional filter in Da Nang. Training centers in Hanoi are known for 14-hour study days leading up to this.", link: "#" },
  { name: "Coca-Cola STAGE:0 eSPORTS", country: "Japan", desc: "Japan's largest high-school battle. A televised peak of teen concentration and strategic endurance.", link: "https://stage0.jp" },

  // AMERICAS & EUROPE: The Elite Research Tiers
  { name: "OBMEP PIC (Junior Research)", country: "Brazil", desc: "The elite tier of the Brazilian Math Olympiad. Winners travel long distances for university-level research cycles on weekends.", link: "http://www.obmep.org.br" },
  { name: "Porsche Endurance Series Junior", country: "Brazil", desc: "A brutal physical and financial grind. Only those who survive the high-risk development path reach the Goiânia rounds.", link: "#" },
  { name: "Regeneron Science Talent Search", country: "USA", desc: "The 'Junior Nobel Prize'. Requires years of original research. Only 40 finalists reach the peak in D.C.", link: "https://www.societyforscience.org/regeneron-sts" },
  { name: "Romanian Master of Mathematics", country: "Romania", desc: "Often considered harder than the IMO. An invitation-only best-of-the-best scenario for top-performing countries.", link: "https://rmm.lghf.ro" },
  { name: "All Souls Prize Fellowship", country: "UK", desc: "Though postgraduate, its secondary-level filters set the global bar for 'blood and tears' testing. Pass rate: 1.33%.", link: "#" }
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
      // Added data attribute for targeting
      card.innerHTML = `
        <div class="card-main-info">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${comp.name}</h3>
          <p class="small-caps" style="color: var(--primary-gold);">${comp.country}</p>
        </div>
        <div class="card-extra-info" style="display: none; margin-top: 16px; border-top: 1px solid var(--glass-border); padding-top: 16px;">
          <p style="font-size: 0.95rem; color: #DDD; line-height: 1.4;">${comp.desc}</p>
          ${comp.link !== '#' ? `<a href="${comp.link}" target="_blank" class="btn btn-secondary" style="margin-top: 12px; font-size: 0.8rem; padding: 6px 12px;">Visit Official Site</a>` : '<p class="small-caps" style="margin-top:12px; opacity:0.6;">No Official Website Available</p>'}
        </div>
      `;
      
      card.addEventListener('click', (e) => {
        // Toggle expansion logic
        const extra = card.querySelector('.card-extra-info');
        const isExpanding = extra.style.display === 'none';
        
        // Close all others first for 'accordion' feel
        document.querySelectorAll('.card-extra-info').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.competition-card').forEach(el => el.classList.remove('expanded'));

        if (isExpanding) {
          extra.style.display = 'block';
          card.classList.add('expanded');
          if (window.AudioScape) AudioScape.pop();
          if (window.Haptics) Haptics.medium();
          
          // Particle burst logic
          if (window.createParticleBurst) {
            let codeMap = {
              'Nigeria': 'ng', 'USA': 'us', 'UK': 'gb', 'India': 'in', 
              'Kenya': 'ke', 'France': 'fr', 'South Africa': 'za',
              'Brazil': 'br', 'Japan': 'jp', 'Colombia': 'co', 'Ghana': 'gh',
              'Sweden': 'se', 'Thailand': 'th', 'Netherlands': 'nl',
              'Kyrgyzstan': 'kg', 'Kazakhstan': 'kz', 'Vietnam': 'vn',
              'Ethiopia': 'et', 'Romania': 'ro'
            };
            let code = codeMap[comp.country] || null;
            createParticleBurst(e.clientX, e.clientY, ['#C9A84C', '#FFF'], code);
          }
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

  renderCompetitions();
});
