import confetti from "canvas-confetti";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const greetingEl = document.getElementById("greeting");
const messageEl = document.getElementById("message");
const countdownContainer = document.getElementById("countdown-container");

// Using a fixed date for demonstration if needed, or dynamic
const targetMonth = 8; // September (0-indexed)
const targetDay = 28;

function getNextBirthday() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let nextBirthday = new Date(currentYear, targetMonth, targetDay);

  if (currentDate > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }
  return nextBirthday;
}

function launchConfetti() {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    );
  }, 250);
}

function countdown() {
  const birthDate = getNextBirthday();
  const currentDate = new Date();
  const totalSeconds = Math.floor((birthDate - currentDate) / 1000);

  if (totalSeconds <= 0) {
    // It's the birthday!
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secondsEl.textContent = "00";

    greetingEl.textContent = "Happy Birthday!";
    messageEl.textContent = "Sending you best wishes on your special day!";
    countdownContainer.classList.add("hidden");

    launchConfetti();
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

// Initial call
countdown();
// Update every second
setInterval(countdown, 1000);
