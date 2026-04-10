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
});
