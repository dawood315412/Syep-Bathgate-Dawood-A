const ball = document.getElementById('soccer-ball');
const kickBtn = document.getElementById('kick-btn');
const chakraBtn = document.getElementById('chakra-btn');
const scoreDisplay = document.getElementById('score');
let score = 0;

function kickBall(power = 1) {
  const distance = 200 * power;
  const height = 30 * power;

  ball.style.transform = `translateX(${distance}px) translateY(-${height}px)`;

  setTimeout(() => {
    ball.style.transform = `translateX(${distance}px) translateY(0)`;
  }, 500);

  setTimeout(() => {
    ball.style.transform = `translateX(0) translateY(0)`;
    score += power;
    scoreDisplay.textContent = score;
  }, 1000);
}

kickBtn.addEventListener('click', () => kickBall(1));
chakraBtn.addEventListener('click', () => kickBall(3)); 




const introQuote = document.getElementById('introQuote');
const fighterIntro = document.getElementById('fighterIntro');

fighterCards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedGame = card.getAttribute('data-game');

    // Set quote based on fighter
    let quote = '';
    if (selectedGame === 'naruto') {
      quote = '“I never go back on my word!”';
    } else if (selectedGame === 'luffy') {
      quote = '“I’m gonna be King of the Pirates!”';
    }

    // Show intro animation
    introQuote.textContent = quote;
    fighterIntro.classList.remove('hidden');

    // Hide all games
    gameSections.forEach(section => section.classList.add('hidden'));

    // Delay game reveal for dramatic effect
    setTimeout(() => {
      fighterIntro.classList.add('hidden');
      document.getElementById(`${selectedGame}Game`).classList.remove('hidden');
    }, 2000); // 2 seconds for intro
  });
});



