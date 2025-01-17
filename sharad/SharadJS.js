// JavaScript functionality

// 1. Show Surprise Message on Button Click
const showMessageButton = document.getElementById("showMessageButton");
const surpriseMessage = document.getElementById("surpriseMessage");

showMessageButton.addEventListener("click", () => {
  surpriseMessage.style.display = "block";
  showMessageButton.style.display = "none"; // Hide the button after clicking
});

// 2. Countdown Timer to Midnight
function updateCountdown() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999); // Set time to the end of the day

  const timeLeft = midnight - now; // Calculate time difference
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("timer").textContent = `${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    document.getElementById("timer").textContent = "The birthday is over! 🎉";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// 3. Add Confetti Animation (Optional)
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  const size = Math.random() * 10 + 5; // Random size
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

  setTimeout(() => confetti.remove(), 5000); // Remove after animation
}

// Generate confetti every 200ms
setInterval(createConfetti, 200);
