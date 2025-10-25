const hiText = document.getElementById('hiText');
const btn = document.getElementById('changeBtn');
const character = document.querySelector('.character');

const greetings = [
  "Hi!", 
  "Hello!", 
  "Hey there!", 
  "What's up?", 
  "Howdy!", 
  "Yo!", 
  "Nice to see you!"
];

const characters = ["😸", "🐥", "🐸", "🐼", "🐰", "🐧", "🦊", "🐝", "👋😺"];

btn.addEventListener('click', () => {
  // Ganti teks dan karakter secara acak
  const randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
  const randomChar = characters[Math.floor(Math.random() * characters.length)];

  hiText.textContent = randomGreet;
  character.textContent = randomChar;

  // Animasi bounce
  hiText.style.transform = 'scale(1.3)';
  character.style.transform = 'scale(1.3)';
  setTimeout(() => {
    hiText.style.transform = 'scale(1)';
    character.style.transform = 'scale(1)';
  }, 200);
});
