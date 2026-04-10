// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // General app logic
  
  // Rotating affirmations for Home Page
  const affirmations = [
    "The most interesting thing about you is not on your résumé.",
    "You don't have to be perfect to belong here.",
    "We're looking for what you've *done*, not what you've *won*.",
    "Your voice matters. We want to hear it.",
    "Minerva is for people who ask questions.",
    "You're enough. And we mean that."
  ];

  const affirmationCard = document.querySelector('.affirmation-card');
  if (affirmationCard) {
    const randomQuote = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationCard.textContent = `"${randomQuote}"`;
  }
});
