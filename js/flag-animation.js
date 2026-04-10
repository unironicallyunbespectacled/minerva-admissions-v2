// js/flag-animation.js

const countryData = [
  { name: "Nigeria", emoji: "🇳🇬", colors: ["#008751", "#FFFFFF"] },
  { name: "Kazakhstan", emoji: "🇰🇿", colors: ["#00AFCA", "#FEC50C"] },
  { name: "China", emoji: "🇨🇳", colors: ["#EE1C25", "#FFFF00"] },
  { name: "Japan", emoji: "🇯🇵", colors: ["#FFFFFF", "#BC002D"] },
  { name: "Croatia", emoji: "🇭🇷", colors: ["#FF0000", "#FFFFFF", "#0000FF"] },
  { name: "Serbia", emoji: "🇷🇸", colors: ["#C6363C", "#0C4076", "#FFFFFF"] },
  { name: "USA", emoji: "🇺🇸", colors: ["#B22234", "#FFFFFF", "#3C3B6E"] },
  { name: "UK", emoji: "🇬🇧", colors: ["#C8102E", "#FFFFFF", "#012169"] },
  { name: "Ghana", emoji: "🇬🇭", colors: ["#CE1126", "#FCD116", "#006B3F", "#000000"] },
  { name: "Rwanda", emoji: "🇷🇼", colors: ["#00A1DE", "#FAD201", "#20603D"] },
  { name: "Morocco", emoji: "🇲🇦", colors: ["#C1272D", "#006233"] },
  { name: "Egypt", emoji: "🇪🇬", colors: ["#CE1126", "#FFFFFF", "#000000", "#C09300"] },
  { name: "South Africa", emoji: "🇿🇦", colors: ["#E03C31", "#FFFFFF", "#007749", "#FFB81C", "#001489", "#000000"] },
  { name: "Mexico", emoji: "🇲🇽", colors: ["#006847", "#FFFFFF", "#CE1126"] },
  { name: "Colombia", emoji: "🇨🇴", colors: ["#FCD116", "#003893", "#CE1126"] },
  { name: "India", emoji: "🇮🇳", colors: ["#FF9933", "#FFFFFF", "#138808", "#000080"] },
  { name: "Kenya", emoji: "🇰🇪", colors: ["#000000", "#BB0000", "#006600", "#FFFFFF"] },
  { name: "Ethiopia", emoji: "🇪🇹", colors: ["#078930", "#FCDD09", "#DA121A", "#0F47AF"] },
  { name: "Brazil", emoji: "🇧🇷", colors: ["#009B3A", "#FEDF00", "#002776", "#FFFFFF"] },
  { name: "France", emoji: "🇫🇷", colors: ["#002395", "#FFFFFF", "#ED2939"] },
  { name: "Germany", emoji: "🇩🇪", colors: ["#000000", "#FF0000", "#FFCC00"] },
  { name: "International", emoji: "🌐", colors: ["#C9A84C", "#2E86AB"] }
];

// Fallback for remaining countries (random generation for simplicity in prototype, though we could list 100)
for(let i=0; i<80; i++) {
  countryData.push({
    name: "Country " + i,
    emoji: ["🇲🇾","🇳🇵","🇲🇳","🇰🇷","🇧🇩","🇳🇱","🇧🇪","🇸🇪","🇳🇴","🇩🇰","🇫🇮","🇨🇭","🇦🇹","🇮🇪","🇦🇺","🇳🇿","🇹🇭","🇮🇩","🇵🇪","🇦🇷","🇪🇨","🇻🇪","🇹🇷","🇦🇪","🇶🇦","🇰🇼","🇱🇧","🇯🇴","🇮🇶"][i % 29],
    colors: ["#C9A84C", "#FFFFFF"]
  });
}

function createParticleBurst(x, y, colors, emoji = null) {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = 0;
  container.style.pointerEvents = 'none';
  container.style.zIndex = 9999;
  document.body.appendChild(container);

  // Emoji flies up
  if (emoji) {
    const el = document.createElement('div');
    el.textContent = emoji;
    el.style.position = 'absolute';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.fontSize = '2rem';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.transition = 'all 1.2s cubic-bezier(0.1, 0.8, 0.3, 1)';
    container.appendChild(el);

    // Trigger animation
    requestAnimationFrame(() => {
      el.style.transform = 'translate(-50%, -150px) scale(1.5)';
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
    const distance = Math.random() * 100 + 50;
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
  
  // Toss animation
  let batchIndex = 0;
  const batchSize = 4;
  
  function tossNextBatch() {
    for (let i = 0; i < batchSize; i++) {
      const idx = batchIndex * batchSize + i;
      if (idx >= countryData.length) return;
      
      const country = countryData[idx];
      const flagEl = document.createElement('span');
      flagEl.className = 'flag-emoji';
      flagEl.textContent = country.emoji;
      flagEl.style.fontSize = '2rem';
      flagEl.style.cursor = 'pointer';
      flagEl.style.display = 'inline-block';
      flagEl.style.opacity = '0';
      flagEl.style.transform = `translateY(50px) scale(0.5) rotate(${(Math.random() - 0.5) * 60}deg)`;
      flagEl.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      
      flagEl.addEventListener('click', (e) => {
        createParticleBurst(e.clientX, e.clientY, country.colors, country.emoji);
        if (window.Haptics) Haptics.light();
      });

      container.appendChild(flagEl);
      
      // Trigger animation
      setTimeout(() => {
        flagEl.style.opacity = '1';
        flagEl.style.transform = `translateY(0) scale(1) rotate(${(Math.random() - 0.5) * 40}deg)`;
      }, 50);
    }
    
    batchIndex++;
    if (batchIndex * batchSize < countryData.length) {
      setTimeout(tossNextBatch, 50); // 2 seconds total roughly
    }
  }

  tossNextBatch();
  
  // Global click burst
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && !e.target.closest('.flag-emoji') && !e.target.closest('.competition-card')) {
      createParticleBurst(e.clientX, e.clientY, ['#C9A84C', '#FFFFFF']);
    }
  });
});

window.createParticleBurst = createParticleBurst;
