
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




// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


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








