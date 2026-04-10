// js/vibe-check.js

const competitions = [
  // --- AFRICA: NIGERIA & REGIONAL ---
  { name: "Riversman Competition", country: "Nigeria", desc: "A legendary endurance and academic quest in the Niger Delta. Barely documented online, it tests the absolute physical and mental limits of students through survival and logic rounds.", link: "#" },
  { name: "NCS WhizKids IT Competition", country: "Nigeria", desc: "The Nigeria Computer Society's high-pressure gauntlet. Secondary school students are grilled on advanced computing theory, logic, and IT application in intense community hall environments.", link: "https://ncs.org.ng" },
  { name: "La-Vogue National Math Championship", country: "Nigeria", desc: "A historic 'mind-war' across all 36 states and the FCT. Forms are distributed through physical LGA offices; the final rounds are legendary for their difficulty and high-stakes logic.", link: "https://la-vogueschools.org" },
  { name: "InterswitchSPAK 8.0", country: "Nigeria", desc: "Nigeria's biggest STEM gauntlet. Thousands sit for a nationwide CBT; only 81 survive to face the televised 'blood and sweat' rounds for massive scholarships.", link: "https://www.interswitchspak.com" },
  { name: "Cowbellpedia Qualifying Exam", country: "Nigeria", desc: "The 'silent killer'. Over 50,000 students sit for a single-day paper exam across Nigeria. Only the top 108 survive to see the TV cameras.", link: "https://www.cowbellpedia.ng" },
  { name: "NLNG Science Quiz Competition", country: "Nigeria", desc: "A multi-stage 'blood and sweat' marathon specifically for public schools in Rivers State and Bonny Island, testing all major sciences.", link: "#" },
  { name: "Roseline Etuokwu Sigma Quiz", country: "Nigeria", desc: "A grueling, multi-stage national quiz marathon. Winners emerge from a brutal state-by-state selection process representing Kano, Yobe, and beyond.", link: "#" },
  { name: "Mbaise Senior Secondary Math", country: "Nigeria", desc: "A hyper-local regional contest in Imo State, Nigeria, specifically aimed at demystifying math for rural students while discovering elite 'hidden' talent.", link: "#" },
  { name: "SECROSOFT National Online Debate", country: "Nigeria", desc: "A high-pressure, state-by-state online debate war where students from all 36 states compete every Saturday under intense public scrutiny.", link: "#" },
  { name: "NEMA National Essay", country: "Nigeria", desc: "Requires deep policy research into disaster risk reduction and infrastructure resilience, judged by government-appointed emergency experts.", link: "#" },
  { name: "African Spelling Bee (ASB)", country: "International", desc: "Champions from 20+ countries tested on English and words drawn from 21 different African languages. A true continental linguistic siege.", link: "https://africanspellingbee.com" },
  { name: "Ethiopian Science Fair (STEM Synergy)", country: "Ethiopia", desc: "Engineering-heavy model where high school students (grades 7-12) must build practical, working solutions to national infrastructure challenges.", link: "#" },
  { name: "SADC Secondary School Essay", country: "International", desc: "A policy-driven research gauntlet for the 16 SADC member states focusing on industrialization and energy transitions for a resilient future.", link: "https://www.sadc.int" },
  { name: "Samsung Solve for Tomorrow (SA)", country: "South Africa", desc: "A global STEM competition for learners in public schools to submit innovative solutions to community challenges under extreme deadlines.", link: "https://www.samsung.com/za/solvefortomorrow" },

  // --- ASIA: CIS & CENTRAL ASIA & INDIA ---
  { name: "National Math Olympiad (KG)", country: "Kyrgyzstan", desc: "The IV Stage is a 3-day offline marathon in Bishkek. Students solve proof-based problems for 5 hours straight daily. Follow @imo_kg on Telegram for info.", link: "#" },
  { name: "Altyn Tuyun Engineering Week", country: "Kyrgyzstan", desc: "A 'hidden' gauntlet in Bishkek. Students build functional machines from scrap metal and logic controllers. Failure during stress tests means instant elimination.", link: "#" },
  { name: "AUCA Mathematical Contest", country: "Kyrgyzstan", desc: "Held on-campus at the American University of Central Asia. The primary filter for identifying the brightest minds in the region for scholarships.", link: "https://auca.kg" },
  { name: "World Nomad Games (Youth)", country: "Kyrgyzstan", desc: "Featuring traditional strength contests like Alysh (belt wrestling) and Mas Wrestling, deeply embedded in Central Asian school culture.", link: "#" },
  { name: "International Zhautykov Olympiad", country: "Kazakhstan", desc: "An elite team-based gauntlet in Mathematics, Physics, and Informatics. Designed to test the cooperación between the world's most elite STEM schools.", link: "https://izho.kz" },
  { name: "JEE Advanced", country: "India", desc: "The ultimate gateway for Indian engineering aspirants. Only the top 1% of millions qualify for the IITs. Brutally competitive.", link: "https://jeeadv.ac.in" },
  { name: "NSTSE (Science Talent Search)", country: "India", desc: "Widely regarded as India's most difficult secondary exam, focusing on critical conceptual thinking over rote memorization.", link: "https://www.unifiedcouncil.com" },
  { name: "Indian Computing Olympiad (ICO)", country: "India", desc: "The algorithmic gatekeeper featuring ZIO (written) and ZCO (programming) marathons. Only 60 students nationally win medals.", link: "https://www.iarcs.org.in" },
  { name: "KVPY (Kishore Vaigyanik)", country: "India", desc: "Administered by IISc, one of India's most ambitious science promotion schemes involving deep research and high-pressure interviews.", link: "#" },
  { name: "Aryabhatta Olympiad of Maths", country: "India", desc: "A notoriously tough Olympiad targeting students in Delhi with problems that far exceed the standard national curriculum.", link: "#" },
  { name: "Vietnam HS Science & Tech Research", country: "Vietnam", desc: "Gifted students present advanced research (e.g. polyurethane composites) that often faces scrutiny for its university-level complexity.", link: "#" },
  { name: "Hanoi Open Mathematics (HOMC)", country: "Vietnam", desc: "A niche invitation-only contest in Vietnam focused on 'elegant' geometry proofs and 14-hour daily training sessions.", link: "#" },
  { name: "Gaokao", country: "China", desc: "The world's hardest exam. A life-defining multi-day gauntlet for 12 million students. Government uses drones and fingerprinting to ensure integrity.", link: "#" },
  { name: "Coca-Cola STAGE:0 eSPORTS", country: "Japan", desc: "Japan's largest high-school battle. Student teams compete in high-stakes titles like VALORANT and Overwatch in Osaka's Grand Finals.", link: "https://stage0.jp" },

  // --- AMERICAS: BRAZIL & REGIONAL ---
  { name: "OBMEP PIC (Junior Research)", country: "Brazil", desc: "The elite Tier of the Brazilian Math Olympiad. Winners travel long distances for university-level research cycles every weekend.", link: "http://www.obmep.org.br" },
  { name: "Olimpíada Brasileira de Física", country: "Brazil", desc: "Features a grueling Phase 3 final stage: a 3-hour Experimental Exam followed by a 4-hour Theoretical Exam on the same day.", link: "#" },
  { name: "Olimpíada Brasileira de Robótica", country: "Brazil", desc: "Practical phases held in gymnasiums where student-built robots navigate disaster zones autonomously. One sensor failure ends months of work.", link: "#" },
  { name: "Porsche Endurance Series Junior", country: "Brazil", desc: "A brutal physical and financial development path in Brazilian motorsports for elite students seeking professional careers.", link: "#" },
  { name: "Desafiando el Riesgo", country: "International", desc: "A niche actuarial case competition for students to perform complex insurance risk assessments on global climate/pandemic data.", link: "#" },
  { name: "Regeneron Science Talent Search", country: "USA", desc: "The nation's oldest and most prestigious science contest. Only 40 finalists reach the peak in D.C. to compete for $250,000.", link: "https://www.societyforscience.org" },
  { name: "Modeling the Future Challenge", country: "USA", desc: "Teams act as insurance actuaries, writing 30-page reports on messy global datasets. A 5-month marathon of data endurance.", link: "#" },

  // --- EUROPE & OCEANIA & GLOBAL ---
  { name: "Romanian Master of Mathematics", country: "Romania", desc: "Invitation-only elite competition. Often considered even harder than the IMO, designed for the absolute best-of-the-best.", link: "https://rmm.lghf.ro" },
  { name: "All Souls Prize Fellowship", country: "UK", desc: "Sets the global bar for academic 'blood and tears'. Though postgraduate, its filters influence the world's toughest secondary testing.", link: "#" },
  { name: "International Linguistics Olympiad", country: "International", desc: "One of the most unique challenges: decode unknown scripts and grammars from scratch using pure logical deduction.", link: "https://ioling.org" },
  { name: "International Psychology Olympiad", country: "International", desc: "Tests the application of psychological concepts to complex, real-world problems. Requires deep critical analysis skills.", link: "#" },
  { name: "International History Olympiad", country: "International", desc: "Features high-speed buzzer bowls and 'Hexathlon' rounds testing thousands of data points of historical knowledge.", link: "https://www.historyolympiad.com" },
  { name: "Big Science Competition", country: "Australia", desc: "An international science gauntlet focusing on critical thinking and real-world data scenarios rather than rote memorization.", link: "#" },
  { name: "Australian Informatics Olympiad", country: "Australia", desc: "A 3-hour coding war with no internet or help. Algorithms must run in under 1 second to pass the test cases.", link: "#" },
  
  // --- CLASSICS RESTORED ---
  { name: "IMO (International Math Olympiad)", country: "International", desc: "The oldest and most prestigious math competition globally. Proof-based problems solved over two 4.5-hour sessions.", link: "https://www.imo-official.org" },
  { name: "IPhO (Physics Olympiad)", country: "International", desc: "Testing secondary students on university-level physics theory and experimental lab work.", link: "http://ipho-olympiad.org" },
  { name: "IChO (Chemistry Olympiad)", country: "International", desc: "A massive intellectual marathon testing advanced chemical synthesis and analysis.", link: "https://www.icho.sk" },
  { name: "IBO (Biology Olympiad)", country: "International", desc: "The premier global biology contest. Winners often train in months-long 'boot camps' beforehand.", link: "https://www.ibo-info.org" },
  { name: "IOI (Informatics Olympiad)", country: "International", desc: "The world's elite coding contest. Requires thousands of hours of algorithmic practice to even qualify.", link: "https://ioinformatics.org" },
  { name: "ISEF (Science Fair)", country: "USA", desc: "The world's largest pre-college science competition. A peak of original student research and engineering.", link: "https://www.societyforscience.org/isef" },
  { name: "World Scholar's Cup (WSC)", country: "International", desc: "A global celebration of learning across Debate, Writing, Bowl, and Challenge events.", link: "https://www.scholarscup.org" },
  { name: "Diamond Challenge", country: "USA", desc: "Teens learn about entrepreneurship by identifying real market gaps and pitching to panels of professional investors.", link: "#" },
  { name: "Hult Prize", country: "International", desc: "The world's largest student competition for social good and sustainable business action.", link: "https://www.hultprize.org" },
  { name: "DECA International", country: "USA", desc: "Global competition for emerging leaders in business, finance, and hospitality.", link: "https://www.deca.org" },
  { name: "John Locke Essay", country: "UK", desc: "Elite global essay competition judged by professors from Oxford and Princeton.", link: "https://www.johnlockeinstitute.com" },
  { name: "Conrad Spirit of Innovation", country: "USA", desc: "Challenges students to design the future through STEM and entrepreneurship.", link: "https://www.conradchallenge.org" },
  { name: "SAGE Global", country: "International", desc: "Students for the Advancement of Global Entrepreneurship.", link: "https://www.sageglobal.org" },
  { name: "Technovation Challenge", country: "International", desc: "Girls solving community problems through mobile apps and AI.", link: "https://www.technovation.org" },
  { name: "Invento Business Pitch", country: "Colombia", desc: "High school business and innovation competition in Latin America.", link: "#" },
  { name: "Tribeca Emerging Artists", country: "USA", desc: "Highlighting world-class filmmaking and digital storytelling from high schools.", link: "#" },
  { name: "Scholastic Art & Writing", country: "USA", desc: "The nation's longest-running recognition program for creative teens.", link: "https://www.artandwriting.org" },
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
      card.style.position = 'relative';
      
      card.innerHTML = `
        <div class="card-main-info">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${comp.name}</h3>
          <p class="small-caps" style="color: var(--primary-gold);">${comp.country}</p>
        </div>
        <div class="card-extra-info" style="display: none; margin-top: 16px; border-top: 1px solid var(--glass-border); padding-top: 16px;">
          <p style="font-size: 0.95rem; color: #EEE; line-height: 1.5; background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px;">${comp.desc}</p>
          <div style="display: flex; gap: 10px; align-items: center; margin-top: 16px;">
            ${comp.link !== '#' ? `<a href="${comp.link}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 8px 16px;">Visit Official Website</a>` : '<span class="small-caps" style="opacity:0.6; font-size: 10px;">Shadow Qualifier (No Official Site)</span>'}
          </div>
        </div>
      `;
      
      card.addEventListener('click', (e) => {
        const extra = card.querySelector('.card-extra-info');
        const isExpanding = extra.style.display === 'none';
        
        if (isExpanding) {
            // ACCORDION logic
            document.querySelectorAll('.card-extra-info').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.competition-card').forEach(el => {
                el.style.borderColor = 'rgba(255,255,255,0.2)';
                el.style.transform = 'scale(1)';
                el.style.zIndex = '1';
            });
            
            extra.style.display = 'block';
            card.style.borderColor = 'var(--primary-gold)';
            card.style.transform = 'scale(1.02)';
            card.style.zIndex = '10';
            
            // Scroll card into view smoothly
            setTimeout(() => {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);

            if (window.Haptics) Haptics.heavy();
            if (window.AudioScape) AudioScape.pop();
            
            // BURST with correct mapping
            if (window.createParticleBurst) {
                let codeMap = {
                  'Nigeria': 'ng', 'USA': 'us', 'UK': 'gb', 'India': 'in', 
                  'Kenya': 'ke', 'France': 'fr', 'South Africa': 'za',
                  'Brazil': 'br', 'Japan': 'jp', 'Colombia': 'co', 'Ghana': 'gh',
                  'Sweden': 'se', 'Thailand': 'th', 'Netherlands': 'nl',
                  'Kyrgyzstan': 'kg', 'Kazakhstan': 'kz', 'Vietnam': 'vn',
                  'Ethiopia': 'et', 'Romania': 'ro', 'Canada': 'ca'
                };
                let code = codeMap[comp.country] || null;
                createParticleBurst(e.clientX, e.clientY, ['#C9A84C', '#FFF'], code);
            }
        } else {
            extra.style.display = 'none';
            card.style.borderColor = 'rgba(255,255,255,0.2)';
            card.style.transform = 'scale(1)';
            card.style.zIndex = '1';
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
