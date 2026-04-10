// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // General app logic
  
  // Rotating affirmations for Home Page
  const affirmations = [
    "The most interesting thing about you is not on your résumé.",
    "You don't have to be perfect to belong here.",
    "We're looking for what you've <b>done</b>, not what you've <b>won</b>.",
    "Your voice matters. We want to hear it.",
    "Minerva is for people who ask questions.",
    "You're enough. And we mean that.",
    "&ldquo;The mind is not a vessel to be filled, but a fire to be kindled.&rdquo; &mdash; <i>Plutarch</i>",
    "&ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo; &mdash; <i>Nelson Mandela</i>",
    "&ldquo;I have no special talent. I am only passionately curious.&rdquo; &mdash; <i>Albert Einstein</i>",
    "&ldquo;Real knowledge is to know the extent of one's ignorance.&rdquo; &mdash; <i>Confucius</i>",
    "&ldquo;Learning never exhausts the mind.&rdquo; &mdash; <i>Leonardo da Vinci</i>",
    "&ldquo;The only true wisdom is in knowing you know nothing.&rdquo; &mdash; <i>Socrates</i>"
  ];

  const affirmationCard = document.querySelector('.affirmation-card');
  if (affirmationCard) {
    const randomQuote = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationCard.innerHTML = `"${randomQuote}"`;
  }

  // Pixie Dust Idle Effect
  let idleTimer;
  let dustInterval;
  let isRaining = false;

  function createPixieDust() {
    const dust = document.createElement('div');
    dust.style.position = 'fixed';
    dust.style.top = '-10px';
    dust.style.left = `${Math.random() * 100}vw`;
    dust.style.width = `${Math.random() * 3 + 1}px`;
    dust.style.height = dust.style.width;
    dust.style.backgroundColor = '#C9A84C'; // Primary Gold
    dust.style.borderRadius = '50%';
    dust.style.opacity = Math.random() * 0.5 + 0.2;
    dust.style.pointerEvents = 'none';
    dust.style.zIndex = '9997'; // Just behind cursor ring
    dust.style.boxShadow = '0 0 4px #C9A84C';
    
    // Animation
    const duration = Math.random() * 3 + 2; // 2-5 seconds
    dust.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-in-out`;
    
    document.body.appendChild(dust);
    
    // Trigger fall
    requestAnimationFrame(() => {
      dust.style.transform = `translateY(${window.innerHeight + 20}px) translateX(${(Math.random() - 0.5) * 50}px)`;
      dust.style.opacity = '0';
    });

    setTimeout(() => {
      dust.remove();
    }, duration * 1000);
  }

  function startRaining() {
    if (isRaining) return;
    isRaining = true;
    dustInterval = setInterval(createPixieDust, 200); // create a particle every 200ms
    if (window.AudioScape) AudioScape.ambientWind(15);
  }

  function stopRaining() {
    if (!isRaining) return;
    isRaining = false;
    clearInterval(dustInterval);
  }

  function resetIdleTimer() {
    stopRaining();
    clearTimeout(idleTimer);
    // Start raining after 15 seconds of inactivity
    idleTimer = setTimeout(startRaining, 15000);
  }

  // Bind idle events
  ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, { passive: true });
  });

  // Init
  resetIdleTimer();
});

