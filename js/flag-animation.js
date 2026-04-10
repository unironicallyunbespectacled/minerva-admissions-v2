// js/flag-animation.js

const countryData = [
  { name: 'Nigeria', code: 'ng', colors: ['#008751', '#FFFFFF'] },
  { name: 'Kazakhstan', code: 'kz', colors: ['#00AFCA', '#FEC50C'] },
  { name: 'China', code: 'cn', colors: ['#EE1C25', '#FFFF00'] },
  { name: 'Japan', code: 'jp', colors: ['#FFFFFF', '#BC002D'] },
  { name: 'Croatia', code: 'hr', colors: ['#FF0000', '#FFFFFF', '#0000FF'] },
  { name: 'Serbia', code: 'rs', colors: ['#C6363C', '#0C4076', '#FFFFFF'] },
  { name: 'USA', code: 'us', colors: ['#B22234', '#FFFFFF', '#3C3B6E'] },
  { name: 'Canada', code: 'ca', colors: ['#FF0000', '#FFFFFF'] },
  { name: 'UK', code: 'gb', colors: ['#C8102E', '#FFFFFF', '#012169'] },
  { name: 'Ghana', code: 'gh', colors: ['#CE1126', '#FCD116', '#006B3F', '#000000'] },
  { name: 'Rwanda', code: 'rw', colors: ['#00A1DE', '#FAD201', '#20603D'] },
  { name: 'Morocco', code: 'ma', colors: ['#C1272D', '#006233'] },
  { name: 'Egypt', code: 'eg', colors: ['#CE1126', '#FFFFFF', '#000000', '#C09300'] },
  { name: 'South Africa', code: 'za', colors: ['#E03C31', '#FFFFFF', '#007749', '#FFB81C', '#001489', '#000000'] },
  { name: 'Mexico', code: 'mx', colors: ['#006847', '#FFFFFF', '#CE1126'] },
  { name: 'Colombia', code: 'co', colors: ['#FCD116', '#003893', '#CE1126'] },
  { name: 'India', code: 'in', colors: ['#FF9933', '#FFFFFF', '#138808', '#000080'] },
  { name: 'Kenya', code: 'ke', colors: ['#000000', '#BB0000', '#006600', '#FFFFFF'] },
  { name: 'Ethiopia', code: 'et', colors: ['#078930', '#FCDD09', '#DA121A', '#0F47AF'] },
  { name: 'Brazil', code: 'br', colors: ['#009B3A', '#FEDF00', '#002776', '#FFFFFF'] },
  { name: 'France', code: 'fr', colors: ['#002395', '#FFFFFF', '#ED2939'] },
  { name: 'Germany', code: 'de', colors: ['#000000', '#FF0000', '#FFCC00'] },
  { name: 'Argentina', code: 'ar', colors: ['#74ACDF', '#FFFFFF', '#F6B40E'] },
  { name: 'Austria', code: 'at', colors: ['#ED2939', '#FFFFFF'] },
  { name: 'Kyrgyzstan', code: 'kg', colors: ['#E31C23', '#FFF200'] },
  { name: 'Uzbekistan', code: 'uz', colors: ['#0099B5', '#CE1126', '#1EB53A', '#FFFFFF'] },
  { name: 'Ireland', code: 'ie', colors: ['#169B62', '#FFFFFF', '#FF883E'] },
  { name: 'Turkmenistan', code: 'tm', colors: ['#009736', '#FFFFFF', '#D22630'] },
  { name: 'El Salvador', code: 'sv', colors: ['#0047AB', '#FFFFFF'] },
  { name: 'Sri Lanka', code: 'lk', colors: ['#FFBE29', '#8D153A', '#EB7400', '#00534E'] }
];

// Shuffle helper
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Map codes to more countries to reach 100+
const extraCodes = ['ca', 'es', 'pt', 'it', 'gr', 'ph', 'id', 'th', 'vn', 'tr', 'ae', 'pl', 'ua', 'nl', 'be', 'se', 'no', 'dk', 'fi', 'ch', 'at', 'ie', 'au', 'nz', 'pe', 'cl', 'ec', 've', 'pk', 'my', 'kr', 'sg', 'tw', 'ru', 'pk', 'il', 'sa', 'qa', 'kw', 'lb', 'jo', 'iq', 'dz', 'tn', 'sn', 'tz', 'mg', 'cm', 'ci', 'tg', 'bj', 'ne', 'td', 'mz', 'ao', 'dj', 'gm', 'gn', 'bf', 'kh', 'mm', 'la', 'np', 'mn', 'bd', 'lt', 'lv', 'ee', 'sk', 'cz', 'hu', 'ro', 'bg', 'hr', 'si'];
extraCodes.forEach(code => {
  if (countryData.length < 110) {
    countryData.push({ name: code.toUpperCase(), code: code, colors: ['#C9A84C', '#FFFFFF'] });
  }
});

// Final shuffle before use
shuffleArray(countryData);

function createParticleBurst(x, y, colors, code = null) {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = 0;
  container.style.pointerEvents = 'none';
  container.style.zIndex = 9999;
  document.body.appendChild(container);

  // Flag flies up
  if (code && typeof code === 'string' && code.length === 2) {
    const el = document.createElement('img');
    el.src = `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
    el.style.position = 'absolute';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = '40px';
    el.style.borderRadius = '4px';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.transition = 'all 1.2s cubic-bezier(0.1, 0.8, 0.3, 1)';
    el.onerror = () => el.remove(); // Hide if broken
    container.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = 'translate(-50%, -60px) scale(1.2)'; // Reduced height
      el.style.opacity = '0';
    });
  }

  // Particles
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.position = 'absolute';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.width = `${Math.random() * 6 + 4}px`;
    p.style.height = p.style.width;
    p.style.backgroundColor = color;
    p.style.borderRadius = '50%';
    p.style.transform = 'translate(-50%, -50%)';
    p.style.transition = 'all 1.2s cubic-bezier(0.1, 0.8, 0.3, 1)';
    container.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 20; // Reduced scatter
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      p.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;
      p.style.opacity = '0';
    });
  }

  setTimeout(() => {
    container.remove();
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('flag-container');
  if (!container) return;

  container.innerHTML = '';
  
  let batchIndex = 0;
  const batchSize = 4;
  
  function tossNextBatch() {
    for (let i = 0; i < batchSize; i++) {
      const idx = batchIndex * batchSize + i;
      if (idx >= countryData.length) return;
      
      const country = countryData[idx];
      const flagWrapper = document.createElement('div');
      flagWrapper.className = 'flag-emoji';
      flagWrapper.style.cursor = 'pointer';
      flagWrapper.style.display = 'inline-block';
      flagWrapper.style.opacity = '0';
      const rot = (Math.random() - 0.5) * 40;
      flagWrapper.style.setProperty('--rot', `${rot}deg`);
      flagWrapper.style.transform = `translateY(50px) scale(0.5) rotate(${rot}deg)`;
      flagWrapper.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      
      const flagImg = document.createElement('img');
      flagImg.src = `https://flagcdn.com/w80/${country.code}.png`;
      flagImg.alt = country.name;
      flagImg.style.width = '48px';
      flagImg.style.height = 'auto';
      flagImg.style.borderRadius = '4px';
      flagImg.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      
      flagWrapper.appendChild(flagImg);
      
      flagWrapper.addEventListener('click', (e) => {
        createParticleBurst(e.clientX, e.clientY, country.colors, country.code);
        if (window.Haptics) Haptics.heavy(); // Amped haptics for flag clicks
        if (window.AudioScape) AudioScape.pop();
      });

      container.appendChild(flagWrapper);
      
      setTimeout(() => {
        flagWrapper.style.opacity = '1';
        flagWrapper.style.transform = `translateY(0) scale(1) rotate(${rot}deg)`;
        
        if (window.AudioScape && Math.random() > 0.8) {
            AudioScape.chime(); // Occasional chime on land
        }

        // Add idle motion after landing
        setTimeout(() => {
          flagWrapper.classList.add('idle-float');
        }, 600);
      }, 50);
    }
    
    // Add light haptic for each batch toss
    if (window.Haptics && batchIndex % 2 === 0) Haptics.light();

    batchIndex++;
    if (batchIndex * batchSize < countryData.length) {
      setTimeout(tossNextBatch, 60);
    }
  }

  tossNextBatch();
  
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && !e.target.closest('.flag-emoji') && !e.target.closest('.competition-card')) {
      createParticleBurst(e.clientX, e.clientY, ['#C9A84C', '#FFFFFF']);
      if (window.Haptics) Haptics.medium(); // Add feedback for empty space clicks
    }
  });
});

window.createParticleBurst = createParticleBurst;
