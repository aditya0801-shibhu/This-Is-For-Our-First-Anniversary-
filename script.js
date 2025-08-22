// Celebration Button Confetti
document.getElementById("celebrateBtn").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.7 }
  });
});

// Floating Hearts
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);
// ——— Helpers ———
const sealCover = document.getElementById('sealCover');
const paper = document.getElementById('paper');
const revealBtn = document.getElementById('revealBtn');
const resetBtn  = document.getElementById('resetBtn');
const letterEl  = document.getElementById('letterText');
const dateEl    = document.getElementById('today');

// Set today's date (nice touch)
dateEl.textContent = new Date().toLocaleDateString(undefined, {
  year: 'numeric', month: 'long', day: 'numeric'
});

// Your love letter lines (edit freely ❤️)
const LETTER_LINES = [
  "My Love,",
  "",
  "Tere bina din adhoora sa lagta hai.",
  "jaise suraj ho lekin roshni na ho.",
  "Tere bina dil udas sa lagta hai.",
  "jaise geet ho lekin dhun na ho.",
  "",
  "Main wada karta hoon: khushiyon mein tumhare saath hansunga,",
  "aur mushkilon mein tumhara haath kabhi nahi chhodunga.",
  "",
  "Tum meri favorite aadat ho. Forever. 💖"
];

// Typewriter effect
function typeWriter(lines, targetEl, speed = 20) {
  targetEl.textContent = "";
  const fullText = lines.join("\n");
  let i = 0;

  return new Promise(resolve => {
    const tick = () => {
      if (i <= fullText.length) {
        targetEl.textContent = fullText.slice(0, i);
        i++;
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    };
    tick();
  });
}

// Open letter
revealBtn.addEventListener('click', async () => {
  sealCover.classList.add('hidden');
  paper.classList.remove('hidden');
  await typeWriter(LETTER_LINES, letterEl, 18);
});

// Close & seal again
resetBtn.addEventListener('click', () => {
  paper.classList.add('hidden');
  letterEl.textContent = "";
  sealCover.classList.remove('hidden');
});
