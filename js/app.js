// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // General app logic
  
  // Rotating affirmations for Home Page - Massive batch
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
    "&ldquo;The only true wisdom is in knowing you know nothing.&rdquo; &mdash; <i>Socrates</i>",
    "&ldquo;The important thing is not to stop questioning. Curiosity has its own reason for existing.&rdquo; &mdash; <i>Albert Einstein</i>",
    "&ldquo;Intelligence plus character - that is the goal of true education.&rdquo; &mdash; <i>Martin Luther King Jr.</i>",
    "&ldquo;The beautiful thing about learning is that no one can take it away from you.&rdquo; &mdash; <i>B.B. King</i>",
    "&ldquo;Live as if you were to die tomorrow. Learn as if you were to live forever.&rdquo; &mdash; <i>Mahatma Gandhi</i>",
    "&ldquo;Education is not preparation for life; education is life itself.&rdquo; &mdash; <i>John Dewey</i>",
    "&ldquo;I am still learning.&rdquo; &mdash; <i>Michelangelo (at age 87)</i>",
    "&ldquo;The roots of education are bitter, but the fruit is sweet.&rdquo; &mdash; <i>Aristotle</i>",
    "&ldquo;Wisdom begins in wonder.&rdquo; &mdash; <i>Socrates</i>",
    "&ldquo;The more that you read, the more things you will know. The more that you learn, the more places you'll go.&rdquo; &mdash; <i>Dr. Seuss</i>",
    "&ldquo;Whatever you are, be a good one.&rdquo; &mdash; <i>Abraham Lincoln</i>"
  ];

  const affirmationCard = document.querySelector('.affirmation-card');
  if (affirmationCard) {
    const randomQuote = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationCard.innerHTML = `"${randomQuote}"`;
  }

  // Mood Toggle Functionality
  const moodBtn = document.querySelector('.mood-toggle');
  const moods = ['Curious', 'Focused', 'Magic'];
  let currentMoodIdx = 0;

  if (moodBtn) {
    moodBtn.addEventListener('click', () => {
      currentMoodIdx = (currentMoodIdx + 1) % moods.length;
      const mood = moods[currentMoodIdx];
      moodBtn.textContent = mood;
      
      // Apply mood effects
      document.documentElement.setAttribute('data-mood', mood.toLowerCase());
      
      // Extreme haptic for mood change
      if (window.Haptics) Haptics.success();
      if (window.AudioScape) AudioScape.schluupp();

      if (mood === 'Magic') {
        startRaining();
      } else {
        stopRaining();
      }
    });
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
    // Color based on mood
    const mood = document.documentElement.getAttribute('data-mood');
    dust.style.backgroundColor = mood === 'magic' ? `hsl(${Math.random() * 360}, 70%, 60%)` : '#C9A84C'; 
    dust.style.borderRadius = '50%';
    dust.style.opacity = Math.random() * 0.5 + 0.2;
    dust.style.pointerEvents = 'none';
    dust.style.zIndex = '9997'; 
    dust.style.boxShadow = mood === 'magic' ? '0 0 8px currentColor' : '0 0 4px #C9A84C';
    
    const duration = Math.random() * 3 + 2; 
    dust.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-in-out`;
    
    document.body.appendChild(dust);
    
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
    dustInterval = setInterval(createPixieDust, 150); 
    if (window.AudioScape) AudioScape.ambientWind(15);
  }

  function stopRaining() {
    // Magic mood keeps it raining
    if (document.documentElement.getAttribute('data-mood') === 'magic') return;
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

  ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, { passive: true });
  });

  resetIdleTimer();
});


