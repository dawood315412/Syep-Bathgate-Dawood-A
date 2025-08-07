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




const reviews = [
  {
    id: 1,
    name: 'Dawood Awal',
    job: 'web developer',
    img: 'Copilot_20250729_192901.png',
    text: "Dawood, your site is straight-up fire — the bold orange and purple color combo instantly grabs attention and shows off your creative flair, while the clean layout makes everything easy to navigate, giving it a smooth, professional feel. You nailed the personal touches by including your favorite anime and soccer player, which adds authenticity and makes the portfolio feel uniquely yours. Highlighting your HTML, CSS, and JavaScript skills right up front shows you're serious about your craft, and the inclusion of your photo adds a relatable, human vibe that draws people in. You've built a strong, stylish foundation — now it's just a matter of leveling up with some slick animations or interactive features to make it truly unforgettable.",
  },
  {
    id: 2,
    name: 'Mrs Schoonmaker',
    job: 'Math Teacher',
    img: 'https://images.squarespace-cdn.com/content/v1/5bec73fa3917eec31d42357d/1600343180765-5H9DIP29CZ4SJ05H5MOJ/image-asset.png?format=500w',
    text: 'Alright Dawood, listen up — this site? It’s hotter than a jalapeño in July 🌶️. That orange and purple color combo? Bold. Loud. The kind of choice that says, “I didn’t come to play, I came to SLAY.” The layout’s so clean I could eat off it — and trust me, I’ve seen some messy code in my day. You sprinkled in your favorite anime and soccer player like seasoning on a good stew — flavorful, personal, and just enough to make me say, “This kid’s got taste.” You flexed those HTML, CSS, and JavaScript muscles right up front like a proud gym bro, and I respect that. And the photo? Chef’s kiss. It’s like the cherry on top of a sundae made of talent and good design choices. You’ve built a solid site, my dude — now go add some spicy animations or interactive magic and make it the Beyoncé of portfolio pages.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
  },
];
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